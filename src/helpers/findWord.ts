export function findWord(word: string, str: string): boolean {
  if (typeof str !== 'string') {
    str = '';
  }
  return str.toLowerCase().includes(word);
}