/**
 * Régions & villes de France — utilisé par le formulaire "Devenir chef"
 * pour les multi-selects de zones d'intervention.
 *
 * Liste des principales communes par région (non exhaustive mais représentative).
 */

export type Region = {
  id: string
  label: string
  cities: string[]
}

export const FRENCH_REGIONS: Region[] = [
  {
    id: 'ile-de-france',
    label: 'Île-de-France',
    cities: [
      'Paris', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil', 'Montreuil',
      'Nanterre', 'Créteil', 'Versailles', 'Vitry-sur-Seine', 'Colombes',
      'Asnières-sur-Seine', 'Aulnay-sous-Bois', 'Rueil-Malmaison', 'Champigny-sur-Marne',
      'Saint-Maur-des-Fossés', 'Cergy', 'Évry-Courcouronnes', 'Meaux', 'Pontoise', 'Melun',
    ],
  },
  {
    id: 'auvergne-rhone-alpes',
    label: 'Auvergne-Rhône-Alpes',
    cities: [
      'Lyon', 'Saint-Étienne', 'Grenoble', 'Villeurbanne', 'Clermont-Ferrand',
      'Annecy', 'Chambéry', 'Valence', 'Vénissieux', 'Bourg-en-Bresse',
      'Roanne', 'Montluçon', 'Aurillac', 'Le Puy-en-Velay', 'Annemasse',
    ],
  },
  {
    id: 'provence-alpes-cote-azur',
    label: "Provence-Alpes-Côte d'Azur",
    cities: [
      'Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Avignon',
      'Antibes', 'Cannes', 'La Seyne-sur-Mer', 'Hyères', 'Fréjus',
      'Grasse', 'Gap', 'Digne-les-Bains', 'Arles', 'Martigues',
    ],
  },
  {
    id: 'occitanie',
    label: 'Occitanie',
    cities: [
      'Toulouse', 'Montpellier', 'Nîmes', 'Perpignan', 'Béziers',
      'Montauban', 'Narbonne', 'Albi', 'Carcassonne', 'Tarbes',
      'Castres', 'Sète', 'Alès', 'Rodez', 'Auch', 'Cahors', 'Foix',
    ],
  },
  {
    id: 'nouvelle-aquitaine',
    label: 'Nouvelle-Aquitaine',
    cities: [
      'Bordeaux', 'Limoges', 'Poitiers', 'Pau', 'La Rochelle',
      'Mérignac', 'Pessac', 'Bayonne', 'Angoulême', 'Niort',
      'Périgueux', 'Brive-la-Gaillarde', 'Agen', 'Mont-de-Marsan', 'Biarritz',
    ],
  },
  {
    id: 'hauts-de-france',
    label: 'Hauts-de-France',
    cities: [
      'Lille', 'Amiens', 'Roubaix', 'Tourcoing', 'Dunkerque',
      'Calais', "Villeneuve-d'Ascq", 'Saint-Quentin', 'Beauvais', 'Valenciennes',
      'Boulogne-sur-Mer', 'Arras', 'Douai', 'Compiègne', 'Lens',
    ],
  },
  {
    id: 'grand-est',
    label: 'Grand Est',
    cities: [
      'Strasbourg', 'Reims', 'Metz', 'Mulhouse', 'Nancy',
      'Colmar', 'Troyes', 'Charleville-Mézières', 'Châlons-en-Champagne', 'Épinal',
      'Thionville', 'Haguenau', 'Chaumont', 'Bar-le-Duc', 'Verdun',
    ],
  },
  {
    id: 'bretagne',
    label: 'Bretagne',
    cities: [
      'Rennes', 'Brest', 'Quimper', 'Lorient', 'Vannes',
      'Saint-Malo', 'Saint-Brieuc', 'Lanester', 'Fougères', 'Concarneau',
      'Lannion', 'Morlaix', 'Pontivy', 'Redon',
    ],
  },
  {
    id: 'pays-de-la-loire',
    label: 'Pays de la Loire',
    cities: [
      'Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'Cholet',
      'La Roche-sur-Yon', 'Laval', 'Saumur', 'Saint-Herblain', 'Rezé', 'La Baule-Escoublac',
    ],
  },
  {
    id: 'normandie',
    label: 'Normandie',
    cities: [
      'Le Havre', 'Rouen', 'Caen', 'Cherbourg-en-Cotentin', 'Évreux',
      'Dieppe', 'Saint-Étienne-du-Rouvray', 'Alençon', 'Lisieux', 'Bayeux', 'Granville',
    ],
  },
  {
    id: 'centre-val-de-loire',
    label: 'Centre-Val de Loire',
    cities: [
      'Tours', 'Orléans', 'Bourges', 'Blois', 'Châteauroux',
      'Chartres', 'Joué-lès-Tours', 'Dreux', 'Vierzon', 'Montargis',
    ],
  },
  {
    id: 'bourgogne-franche-comte',
    label: 'Bourgogne-Franche-Comté',
    cities: [
      'Dijon', 'Besançon', 'Belfort', 'Chalon-sur-Saône', 'Nevers',
      'Auxerre', 'Mâcon', 'Sens', 'Montbéliard', 'Le Creusot', 'Dole', 'Vesoul',
    ],
  },
  {
    id: 'corse',
    label: 'Corse',
    cities: [
      'Ajaccio', 'Bastia', 'Porto-Vecchio', 'Borgo', 'Biguglia', 'Corte', 'Calvi',
    ],
  },
  {
    id: 'guadeloupe',
    label: 'Guadeloupe',
    cities: [
      'Les Abymes', 'Baie-Mahault', 'Le Gosier', 'Petit-Bourg', 'Pointe-à-Pitre',
      'Sainte-Anne', 'Basse-Terre',
    ],
  },
  {
    id: 'martinique',
    label: 'Martinique',
    cities: [
      'Fort-de-France', 'Le Lamentin', 'Le Robert', 'Schoelcher', 'Sainte-Marie',
      'Le François', 'Ducos',
    ],
  },
  {
    id: 'guyane',
    label: 'Guyane',
    cities: [
      'Cayenne', 'Saint-Laurent-du-Maroni', 'Kourou', 'Matoury', 'Rémire-Montjoly',
    ],
  },
  {
    id: 'la-reunion',
    label: 'La Réunion',
    cities: [
      'Saint-Denis', 'Saint-Paul', 'Saint-Pierre', 'Le Tampon', 'Saint-André',
      'Saint-Louis', 'Le Port', 'Saint-Benoît',
    ],
  },
  {
    id: 'mayotte',
    label: 'Mayotte',
    cities: [
      'Mamoudzou', 'Koungou', 'Dembéni', 'Bandraboua', 'Tsingoni',
    ],
  },
]

/** Map id → label de région (pour l'affichage côté serveur). */
export const REGION_LABELS: Record<string, string> = Object.fromEntries(
  FRENCH_REGIONS.map((r) => [r.id, r.label]),
)

/**
 * Villes uniques (dédoublonnées) pour un ensemble de régions sélectionnées,
 * groupées par région pour l'affichage du multi-select.
 */
export function getCitiesByRegion(regionIds: string[]) {
  return FRENCH_REGIONS.filter((r) => regionIds.includes(r.id)).map((r) => ({
    region: r.label,
    cities: [...r.cities].sort((a, b) => a.localeCompare(b, 'fr')),
  }))
}
