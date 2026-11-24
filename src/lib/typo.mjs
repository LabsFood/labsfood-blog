/**
 * Typographie française : espace insécable avant « % € : », fine insécable avant « ; ? ! » » et après « « »,
 * pour qu'un « 50 % » ne se coupe jamais en fin de ligne.
 */
const NNBSP = ' ';
const NBSP = ' ';

export function frenchTypo(text) {
  return text
    .replace(/ (%|€|:)/g, `${NBSP}$1`)
    .replace(/ ([;?!»])/g, `${NNBSP}$1`)
    .replace(/« /g, `«${NNBSP}`)
    .replace(/(\d) (\d{3})\b/g, `$1${NNBSP}$2`);
}

/** Plugin Sätteri (mdast) : applique frenchTypo à tous les nœuds texte du Markdown. */
export const frenchTypoPlugin = {
  name: 'french-typo',
  text(node, ctx) {
    const value = frenchTypo(node.value);
    if (value !== node.value) ctx.replaceNode(node, { type: 'text', value });
  },
};
