# Design System

Design system Vue 3 + TypeScript avec pipeline de design tokens automatise via Tokens Studio et documentation interactive Storybook.

## Prerequisites

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

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de developpement Vite avec hot-reload |
| `npm run build` | Type-check + compilation production dans `dist/` |
| `npm run preview` | Sert le build de production en local |
| `npm run storybook` | Lance Storybook en mode dev sur le port 6006 |
| `npm run build-storybook` | Genere le site statique dans `storybook-static/` |
| `npm run tokens:pull` | Recupere les tokens depuis Tokens Studio |
| `npm run tokens:build` | Genere les fichiers CSS et TypeScript |
| `npm run tokens:sync` | Pull + build en une seule commande |
| `npx vitest --project storybook --run` | Lance les 68 tests d'accessibilite |

## Composants

Le design system suit une architecture Atomic Design (19 composants) :

### Atoms (9)

| Composant | Description |
|-----------|-------------|
| `DsButton` | Bouton d'action (primary, secondary, outline) en 3 tailles |
| `DsInput` | Champ de saisie texte avec `v-model` |
| `DsBadge` | Badge inline en 7 variantes de couleur |
| `DsAvatar` | Avatar circulaire (image, initiales, fallback) |
| `DsTypography` | Typographie semantique (h1, h2, body-md, body-sm) |
| `DsDivider` | Separateur horizontal ou vertical |
| `DsLink` | Lien textuel (primary, secondary) |
| `DsSpinner` | Indicateur de chargement anime en 3 tailles |
| `DsToggle` | Interrupteur binaire avec `v-model` |

### Molecules (7)

| Composant | Description |
|-----------|-------------|
| `DsCard` | Conteneur avec ombre (sm, md, lg) |
| `DsAlert` | Message contextuel (info, success, warning, error) fermable |
| `DsButtonGroup` | Groupe de boutons adjacents |
| `DsInputGroup` | Champ de saisie avec label |
| `DsNavItem` | Element de navigation avec etat actif |
| `DsSearchBar` | Barre de recherche (input + bouton) |
| `DsThemeSwitch` | Interrupteur de theme clair/sombre |

### Organisms (3)

| Composant | Description |
|-----------|-------------|
| `DsHeader` | En-tete avec titre et theme switch |
| `DsSidebar` | Navigation laterale sticky avec IntersectionObserver |
| `DsTokenShowcase` | Section de presentation de design tokens |

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

## Storybook

La documentation interactive des composants est geree par [Storybook](https://storybook.js.org/) v10.

Chaque composant possede :
- Un fichier `.stories.ts` avec les variantes interactives
- Un fichier `.mdx` avec la documentation (description, exemples, props, accessibilite, guidelines)
- Une page **Design Tokens** documentant les couleurs, typographie, espacements, radius et ombres

Fonctionnalites :
- **Theme switching** : toolbar pour basculer entre light et dark
- **Controles interactifs** : modification des props en temps reel via le panel Controls
- **Tests d'accessibilite** : axe-core integre dans le panel Accessibility

## Tests d'accessibilite

Les tests a11y sont automatises via `@storybook/addon-a11y` + `@storybook/addon-vitest` avec [axe-core](https://github.com/dequelabs/axe-core). 68 tests couvrent l'ensemble des stories via Playwright (Chromium headless).

- **Niveau** : `error` — les tests echouent en CI si une violation WCAG est detectee
- **Regle desactivee** : `aria-prohibited-attr` (faux positif du au plugin vue-devtools)
- Configuration dans `.storybook/preview.ts` (parametre `a11y`)

## Structure du projet

```
design-system/
├── .github/workflows/    # CI/CD GitHub Actions
├── .storybook/           # Configuration Storybook
│   ├── main.ts           # Addons, framework, stories glob
│   ├── preview.ts        # Theme switching, a11y, decorateurs
│   ├── preview-head.html # Google Fonts (Roboto)
│   └── vitest.setup.ts   # Setup tests a11y via portable stories
├── tokens/               # Tokens bruts (pull depuis Tokens Studio)
│   ├── tokens/           # Token sets (color/, radius, spacing, etc.)
│   ├── $themes.json      # Configuration des themes
│   └── $metadata.json    # Metadonnees Tokens Studio
├── src/
│   ├── assets/           # CSS globaux (base.css)
│   ├── components/
│   │   ├── atoms/        # 9 composants + stories + MDX
│   │   ├── molecules/    # 7 composants + stories + MDX
│   │   ├── organisms/    # 3 composants + stories + MDX
│   │   ├── pages/        # Page showcase
│   │   └── DesignTokens.mdx  # Documentation des tokens
│   └── tokens/           # Fichiers generes (ne pas editer)
├── sd.build.js           # Config Style Dictionary
├── .tokensstudio.json    # Config SDK Tokens Studio
└── .env                  # API key (gitignored)
```

## IDE recommande

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
