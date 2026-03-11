import { randomScrambleForEvent } from 'cubing/scramble';

export async function getScramble(): Promise<string> {
  const scramble = await randomScrambleForEvent('sq1');
  return scramble.toString().replaceAll(' ', '\u00A0').replaceAll('/', '/\u200B');
}
