# Design System

Design system Vue 3 + TypeScript avec pipeline de design tokens automatisé via Tokens Studio.

## Prérequis

- [Node.js](https://nodejs.org/) v20.19+ ou v22.12+
- Un compte [Tokens Studio](https://tokens.studio/) avec une API key

## Installation

```sh
npm install
```

Creer un fichier `.env` a la racine avec votre API key Tokens Studio :

```
TOKENS_STUDIO_API_KEY=votre_api_key
```

## Commandes

### Developpement

```sh
npm run dev
```

Lance le serveur de developpement Vite avec hot-reload.

### Build production

```sh
npm run build
```

Type-check + compilation pour la production dans `dist/`.

### Preview du build

```sh
npm run preview
```

Sert le build de production en local pour verification.

## Design Tokens

Les tokens sont geres par [Tokens Studio](https://tokens.studio/) (plugin Figma) et transformes en CSS/TypeScript via [Style Dictionary](https://amzn.github.io/style-dictionary/).

### Pipeline

```
Tokens Studio (Figma)
        |
        v
  npm run tokens:pull    -> fetch les tokens via le SDK
        |
        v
    tokens/tokens/*.json -> fichiers JSON bruts
        |
        v
  npm run tokens:build   -> Style Dictionary + sd-transforms
        |
        v
  src/tokens/
    variables-light.css   -> CSS variables (theme clair)
    variables-dark.css    -> CSS variables (theme sombre)
    tokens-light.ts       -> exports TypeScript (theme clair)
    tokens-dark.ts        -> exports TypeScript (theme sombre)
```

### Commandes tokens

| Commande | Description |
|----------|-------------|
| `npm run tokens:pull` | Recupere les tokens depuis Tokens Studio |
| `npm run tokens:build` | Genere les fichiers CSS et TypeScript |
| `npm run tokens:sync` | Pull + build en une seule commande |

### Utilisation dans les composants

Les variables CSS sont disponibles globalement :

```css
.mon-composant {
  color: var(--color-text-primary);
  background: var(--color-background-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-family: var(--typography-font-family-base);
}
```

Les tokens TypeScript peuvent etre importes :

```ts
import { ColorTextPrimary, SpacingMd } from '@/tokens/tokens-light';
```

### CI/CD

Le workflow GitHub Actions (`.github/workflows/build-tokens.yml`) peut etre declenche :

- **Manuellement** via `workflow_dispatch` sur GitHub
- **Automatiquement** via un cron quotidien (6h UTC par defaut)

Il pull les tokens, build les fichiers, et commit les changements automatiquement.

> Le secret `TOKENS_STUDIO_API_KEY` doit etre configure dans les settings du repo GitHub (Settings > Secrets and variables > Actions).

## Structure du projet

```
design-system/
├── .github/workflows/    # CI/CD GitHub Actions
├── tokens/               # Tokens bruts (pull depuis Tokens Studio)
│   ├── tokens/           # Token sets (color/, radius, spacing, etc.)
│   ├── $themes.json      # Configuration des themes
│   └── $metadata.json    # Metadonnees Tokens Studio
├── src/
│   ├── assets/           # CSS globaux
│   ├── components/       # Composants Vue
│   └── tokens/           # Fichiers generes (ne pas editer)
├── sd.build.js           # Config Style Dictionary
├── .tokensstudio.json    # Config SDK Tokens Studio
└── .env                  # API key (gitignored)
```

## IDE recommande

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
