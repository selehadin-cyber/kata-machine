export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length))
  let lastGoodPoint = 0
  for (let  i = 0; i < breaks.length;i + jumpAmount) {
    if (breaks[i]) {
      break
    }
    lastGoodPoint += jumpAmount; 
  }

}