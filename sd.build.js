import StyleDictionary from 'style-dictionary';
import { register, permutateThemes } from '@tokens-studio/sd-transforms';
import { readFileSync } from 'node:fs';
import path from 'node:path';

register(StyleDictionary);

const tokensDir = path.resolve(import.meta.dirname, 'tokens');
const outputDir = path.resolve(import.meta.dirname, 'src', 'tokens');

const $themes = JSON.parse(
  readFileSync(path.resolve(tokensDir, '$themes.json'), 'utf-8'),
);
const themes = permutateThemes($themes, { separator: '_' });
const themeEntries = Object.entries(themes).filter(
  ([, tokensets]) => tokensets.length > 0,
);

const configs = themeEntries.map(([name, tokensets]) => ({
  source: tokensets.map((tokenset) =>
    path.resolve(tokensDir, 'tokens', `${tokenset}.json`),
  ),
  platforms: {
    css: {
      files: [
        {
          format: 'css/variables',
          destination: `variables-${name}.css`,
          options: { outputReferences: true },
        },
      ],
      buildPath: `${outputDir}/`,
      transforms: ['name/kebab'],
      transformGroup: 'tokens-studio',
    },
    ts: {
      files: [
        {
          format: 'javascript/es6',
          destination: `tokens-${name}.ts`,
        },
      ],
      buildPath: `${outputDir}/`,
      transformGroup: 'tokens-studio',
    },
  },
  preprocessors: ['tokens-studio'],
}));

for (const cfg of configs) {
  const sd = new StyleDictionary(cfg);
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}
