import { getCollection, type CollectionEntry } from 'astro:content';

export type Guide = CollectionEntry<'guides'>;

/** Guides publiés (les brouillons ne sortent qu'en `astro dev`). */
export async function publishedGuides(): Promise<Guide[]> {
  const all = await getCollection('guides', ({ data }) => !data.draft || import.meta.env.DEV);
  return all.sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime());
}

/**
 * Articles liés : d'abord ceux qui partagent le plus de tags, puis la même
 * catégorie, puis les plus récents. Au plus `limit`.
 */
export function relatedGuides(current: Guide, all: Guide[], limit = 3): Guide[] {
  const tags = new Set(current.data.tags);
  return all
    .filter((g) => g.id !== current.id)
    .map((g) => ({
      g,
      score:
        g.data.tags.filter((t) => tags.has(t)).length * 2 +
        (g.data.category === current.data.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || b.g.data.updatedAt.getTime() - a.g.data.updatedAt.getTime())
    .slice(0, limit)
    .map(({ g }) => g);
}

export const dateFr = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' });
