export function generateRandomColor(hexSymbols: string): string {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexSymbols[Math.floor(Math.random() * 16)];
  }

  return color;
}
