import test from 'node:test';
import assert from 'node:assert/strict';
import { CHARACTERS_LORE } from '../data/exactLore';
import { FATE_ITEMS } from '../data/destinyData';
import { filterCharacters, getRandomFate } from './loreLogic';

test('filterCharacters with empty query returns all 9 characters', () => {
  const result = filterCharacters(CHARACTERS_LORE, '');
  assert.equal(result.length, 9);
});

test('filterCharacters finds character by name', () => {
  const result = filterCharacters(CHARACTERS_LORE, '제논');
  assert.ok(result.some(c => c.name === '제논 레온하르트'));
});

test('getRandomFate returns valid fate from pool', () => {
  const fate = getRandomFate(FATE_ITEMS);
  assert.ok(fate);
  assert.ok(FATE_ITEMS.some(f => f.id === fate.id));
});

test('getRandomFate respects category filter', () => {
  const fate = getRandomFate(FATE_ITEMS, '남장여자 예시');
  assert.equal(fate.category, '남장여자 예시');

  const fateFemale = getRandomFate(FATE_ITEMS, '여장남자 예시');
  assert.equal(fateFemale.category, '여장남자 예시');
});
