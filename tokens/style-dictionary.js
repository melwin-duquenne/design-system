/**
 * DO NOT EDIT. This file was automatically generated, and any changes
 * you make here will probably be overwritten.
 * Feel free to copy this to another location for you to maintain yourself.
 */
// Note: make sure you install the dependencies used in these imports
import StyleDictionary from 'style-dictionary';
import { register, permutateThemes } from '@tokens-studio/sd-transforms';
import { readFileSync } from 'node:fs';
import path from 'node:path';

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary);

const $themes = JSON.parse(
  readFileSync(path.resolve(import.meta.dirname, '$themes.json'), 'utf-8'),
);
const themes = permutateThemes($themes, { separator: '_' });
const configs = Object.entries(themes).map(([name, tokensets]) => ({
  source: tokensets.map((tokenset) =>
    path.resolve(import.meta.dirname, 'tokens', `${tokenset}.json`),
  ),
  platforms: {
    css: {
      files: [
        {
          format: 'css/variables',
          destination: 'variables.css',
        },
      ],
      buildPath: `${path.resolve(import.meta.dirname, 'build/css/')}/`,
      transforms: ['name/kebab'],
      transformGroup: 'tokens-studio',
    },
  },
  preprocessors: ['tokens-studio'],
}));

for (const cfg of configs) {
  const sd = new StyleDictionary(cfg);
  // optionally, cleanup files first..
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}
