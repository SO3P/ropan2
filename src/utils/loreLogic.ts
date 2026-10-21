import { CharacterData } from '../data/exactLore';
import { FateItem } from '../data/destinyData';

export function filterCharacters(
  characters: CharacterData[],
  searchQuery: string = ''
): CharacterData[] {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return characters;

  return characters.filter((c) => {
    const text = [
      c.name,
      c.role,
      c.appearance,
      c.personality,
      c.features
    ].join(' ').toLowerCase();

    return text.includes(query);
  });
}

export function getRandomFate(
  fates: FateItem[],
  categoryFilter?: '전체' | '여장남자 예시' | '남장여자 예시'
): FateItem {
  const candidates =
    !categoryFilter || categoryFilter === '전체'
      ? fates
      : fates.filter((f) => f.category === categoryFilter);

  const pool = candidates.length > 0 ? candidates : fates;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
