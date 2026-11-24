/**
 * Auteurs des guides. Une vraie personne signée avec son rôle renforce la
 * confiance (lecteurs, Google, IA). Ne jamais inventer d'auteur.
 */
export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string; // chemin dans public/
}

export const authors = {
  equipe: {
    name: 'L’équipe Labs Food',
    role: 'Batch cooking à domicile, agréé services à la personne',
    bio: 'Nous organisons des séances de batch cooking à domicile avec des cuisiniers indépendants, et nous gérons pour nos clients le crédit d’impôt et l’avance immédiate. Ces guides répondent aux questions qu’on nous pose le plus souvent, sources officielles à l’appui.',
    avatar: 'icon.png',
  },
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof authors;
export const authorIds = Object.keys(authors) as [AuthorId, ...AuthorId[]];
