import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { authorIds } from './data/authors';
import { categoryIds } from './data/categories';

/**
 * Garde-fou de l'aperçu Google : la meta description est écrite à la main,
 * en texte brut. Le build échoue si elle contient de la syntaxe Markdown
 * (##, **, listes, liens) ou si sa longueur sort de 120 à 160 caractères.
 */
const plainText = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min)
    .max(max)
    .refine((v) => !/[#*_`[\]<>|]|^\s*[-+]\s|\n/.test(v), {
      message: 'Texte brut uniquement : pas de #, **, _, `, [ ], listes ni retours à la ligne.',
    });

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    /** Titre H1 affiché sur la page. */
    title: z.string().min(10),
    /** Titre de l'onglet et du résultat Google (≤ 60 caractères). */
    seoTitle: plainText(20, 60),
    /** Meta description = aperçu Google. Phrase complète, chiffre clé. */
    description: plainText(120, 160),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    /** Clé de src/data/authors.ts. */
    author: z.enum(authorIds).default('equipe'),
    category: z.enum(categoryIds),
    /** Sert au calcul des articles liés. */
    tags: z.array(z.string()).default([]),
    /** Sources officielles citées en bas d'article. */
    sources: z.array(z.object({ label: z.string(), url: z.url() })).min(1),
    faq: z.array(z.object({ q: z.string(), a: plainText(20, 400) })).default([]),
    /** true = non publié (absent des listes, du sitemap et du build). */
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
