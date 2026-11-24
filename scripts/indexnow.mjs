#!/usr/bin/env node
// Signale à IndexNow (Bing, Copilot, Yandex, Seznam...) les guides ajoutés, modifiés ou
// supprimés, une fois le déploiement en ligne. Google n'utilise pas IndexNow : pour lui,
// sitemap + Search Console.
//
//   node scripts/indexnow.mjs --since <sha>   guides changés depuis ce commit
//   node scripts/indexnow.mjs --all           tous les guides publiés
//   options : --wait (attend que les nouvelles pages répondent 200), --dry-run
//
// Spécification : https://www.indexnow.org/documentation
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://blog.labsfood.fr';
const BASE = `${SITE}/guides/`;
const GUIDES_DIR = 'src/content/guides';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MIN_WAIT_MS = 4 * 60_000; // un déploiement Railway prend 2 à 4 minutes
const MAX_WAIT_MS = 20 * 60_000;

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const sinceIndex = args.indexOf('--since');
const since = sinceIndex >= 0 ? args[sinceIndex + 1] : undefined;
const dryRun = flag('--dry-run');

// La clé est le nom du fichier public/<clé>.txt, servi à la racine du domaine.
const keyFile = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('Clé IndexNow introuvable dans public/');
const key = keyFile.replace(/\.txt$/, '');

const isDraft = (file) => /^draft:\s*true\s*$/m.test(readFileSync(file, 'utf8').split(/^---\s*$/m)[1] ?? '');
const slugOf = (file) => file.split('/').pop().replace(/\.md$/, '');

/** @returns {{ live: string[], removed: string[] }} slugs à signaler */
function changedGuides() {
  if (flag('--all') || !since || /^0+$/.test(since)) {
    const files = readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.md')).map((f) => `${GUIDES_DIR}/${f}`);
    return { live: files.filter((f) => !isDraft(f)).map(slugOf), removed: [] };
  }
  const out = execFileSync('git', ['diff', '--name-status', '--no-renames', since, 'HEAD', '--', GUIDES_DIR], { encoding: 'utf8' });
  const live = [];
  const removed = [];
  for (const line of out.split('\n').filter(Boolean)) {
    const [status, file] = line.split('\t');
    if (!file.endsWith('.md')) continue;
    if (status === 'D') removed.push(slugOf(file));
    // Un brouillon n'est pas en ligne : on ne le signale pas.
    else if (existsSync(file) && !isDraft(file)) live.push(slugOf(file));
  }
  return { live, removed };
}

async function waitForLive(urls) {
  const start = Date.now();
  await new Promise((r) => setTimeout(r, MIN_WAIT_MS));
  for (const url of urls) {
    for (;;) {
      const res = await fetch(url, { method: 'HEAD', redirect: 'manual' }).catch(() => null);
      if (res?.status === 200) break;
      if (Date.now() - start > MAX_WAIT_MS) throw new Error(`${url} toujours absent après 20 minutes`);
      await new Promise((r) => setTimeout(r, 20_000));
    }
  }
}

const { live, removed } = changedGuides();
if (!live.length && !removed.length) {
  console.log('Aucun guide publié n’a changé : rien à signaler.');
  process.exit(0);
}

const liveUrls = live.map((s) => `${BASE}${s}/`);
// L'accueil liste les guides : il change dès qu'un guide change.
const urlList = [BASE, ...liveUrls, ...removed.map((s) => `${BASE}${s}/`)];
console.log(`URL à signaler :\n${urlList.join('\n')}`);
if (dryRun) process.exit(0);

if (flag('--wait')) await waitForLive(liveUrls);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyFile}`, urlList }),
});
// 200 = reçu, 202 = reçu, clé en cours de vérification.
if (res.status === 200 || res.status === 202) {
  console.log(`IndexNow : ${res.status}, ${urlList.length} URL transmises.`);
} else {
  console.error(`IndexNow : ${res.status} ${await res.text()}`);
  process.exit(1);
}
