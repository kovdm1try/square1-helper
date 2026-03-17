import { randomScrambleForEvent } from 'cubing/scramble';

export function processedScramble(scramble: string): string {
  return scramble.replaceAll(' ', '\u00A0').replaceAll('/', '/\u200B');
}

export async function getScramble(): Promise<string> {
  const scramble = await randomScrambleForEvent('sq1');
  return processedScramble(scramble.toString());
}
