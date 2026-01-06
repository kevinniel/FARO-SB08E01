# Challenge tests unitaires - Correction

## Exercice 1 : `toTitleCase(str)`

<details><summary>Fichier <code>unit-test/toTitleCase.js</code></summary>

```js
/**
 * Retourne une chaîne de caractères dont la première lettre de 
 * chaque mot est en majuscule et les autres lettres en minuscules.
 * @param {string} str 
 * @returns string
 */
export function toTitleCase(str) {
  return (!str || !str.length) ? '' : str.toLowerCase().split(' ').map((s) => s.length ? s[0].toUpperCase() + s.substring(1) : s).join(' ');
}
```

</details>

<details><summary>Fichier <code>unit-test/toTitleCase.unit.test.js</code></summary>

```js
import { describe, it } from "node:test";
import assert from "node:assert";
import { toTitleCase } from "./toTitleCase.js";

describe('toTitleCase()', () => {
  it('Mot en minuscules', () => {
    const result = toTitleCase("oclock");
    assert.equal(result, "Oclock");
  });
  it('Mot avec majuscules, chiffres et caractère spécial', () => {
    const result = toTitleCase("oCL0ck!");
    assert.equal(result, "Ocl0ck!");
  });
  it('Chaîne vide', () => {
    const result = toTitleCase("");
    assert.equal(result, "");
  });
  it('Deux mots', () => {
    const result = toTitleCase("Hello world");
    assert.equal(result, "Hello World");
  });
  it('Deux mots en majuscules', () => {
    const result = toTitleCase("BONJOUR MONDE");
    assert.equal(result, "Bonjour Monde");
  });
  it('Longue chaîne de caractères', () => {
    const result = toTitleCase("Mais qu'est-ce qu'il se passe ici ?");
    assert.equal(result, "Mais Qu'est-ce Qu'il Se Passe Ici ?");
  });
});
```

</details>

## Exercice 2 : `computeStrength(level)`

<details><summary>Fichier <code>unit-tests/game.js</code></summary>

```js
/**
 * Retourne le nombre de points selon le niveau.
 * @param {number} level 
 * @returns number
 */
export function computeStrength(level) {
  // nombre de points
  let points = 0;

  // sur les niveaux supérieurs à 200
  // par exemple level = 205
  if (level > 200) {
    // le personnage gagne 1 point tous les 5 niveaux
    // on calcul le nombre de niveaux au dessus de 200
    //  - level - 200
    //  - on divise le résultat par 5 (1 point tous les 5 niveaux)
    //  - on récupère la partie entière
    // par exemple (205 - 200) = 5, 5 / 5 = 1
    points += Math.trunc((level - 200) / 5);
    // on met à jour le niveau pour poursuivre le calcul
    // par exemple 205 - 200 = 5, level = 205 - 5 = 200
    level -= (level - 200);
  }

  if (level > 100) {
    points += Math.trunc((level - 100) / 3);
    level -= (level - 100);
  }

  if (level > 50) {
    points += Math.trunc((level - 50) / 2);
    level -= (level - 50);
  }

  // ici il reste au maximum level = 50
  points += level;

  return points;
}
```

</details>

<details><summary>Fichier <code>unit-tests/game.unit.test.js</code></summary>

```js
import { describe, it } from "node:test";
import assert from "node:assert";
import { computeStrength } from "./game.js";

describe('computeStrength(level)', () => {
  it('Niveau 1', () => {
    const result = computeStrength(1);
    assert.equal(result, 1);
  });
  it('Niveau 50', () => {
    const result = computeStrength(50);
    assert.equal(result, 50);
  });
  it('Niveau 51', () => {
    const result = computeStrength(51);
    assert.equal(result, 50);
  });
  it('Niveau 52', () => {
    const result = computeStrength(52);
    assert.equal(result, 51);
  });
  it('Niveau 100', () => {
    const result = computeStrength(100);
    assert.equal(result, 75);
  });
  it('Niveau 101', () => {
    const result = computeStrength(101);
    assert.equal(result, 75);
  });
  it('Niveau 200', () => {
    const result = computeStrength(200);
    assert.equal(result, 108);
  });
  it('Niveau 205', () => {
    const result = computeStrength(205);
    assert.equal(result, 109);
  });
  it('Niveau 500', () => {
    const result = computeStrength(500);
    assert.equal(result, 168);
  });
});
```

</details>
