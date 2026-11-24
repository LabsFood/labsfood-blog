export const categories = {
  fiscalite: 'Crédit d’impôt et aides',
  pratique: 'En pratique',
  prix: 'Prix',
  comparatifs: 'Comparatifs',
  publics: 'Pour qui',
  villes: 'Par ville',
} as const;

export type CategoryId = keyof typeof categories;
export const categoryIds = Object.keys(categories) as [CategoryId, ...CategoryId[]];
