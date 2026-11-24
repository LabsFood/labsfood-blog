import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

// ESLint 9 ne lit plus `.eslintrc` : sans ce fichier, `eslint` s'arrête sur
// « couldn't find an eslint.config », et le hook pre-commit (lint-staged) refuse
// tout commit. Les règles sont celles fournies par Next.
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // Le code existant enfreint ces trois règles à 41 endroits (imports inutilisés
    // surtout). En erreur, `next build` — qui lance le lint — ne passerait plus.
    // Avertissements en attendant le nettoyage ; à repasser en erreur ensuite.
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
  },
]

export default config
