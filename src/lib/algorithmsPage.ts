export function calcDelay(cardWidth: number, pageWidth: number | null, index: number, delay: number = 0.08): number {
  if (!pageWidth) return 0;
  const columns = Math.floor(pageWidth / cardWidth);
  return Math.floor(index / columns) * delay;
}
