// Labs Food, éditeur du blog. Mêmes valeurs que batchcooking-web (lib/structured-data.ts,
// components/layout/Footer.tsx) : à garder alignées avec le site principal.
export const MAIN = 'https://www.labsfood.fr';

export const socialProfiles = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/labs_food' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1CD552gDxM/?mibextid=wwXIfr' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@labs_food' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/labs-food' },
] as const;

/**
 * Même `@id` que l'Organization du site principal : Google relie le blog à l'entité
 * Labs Food au lieu d'en créer une seconde. `sameAs` = profils sociaux officiels.
 */
export const publisher = {
  '@type': 'Organization',
  '@id': `${MAIN}/#organization`,
  name: "Lab's Food",
  url: MAIN,
  logo: `${MAIN}/logoOfficiel.png`,
  sameAs: socialProfiles.map((s) => s.href),
};
