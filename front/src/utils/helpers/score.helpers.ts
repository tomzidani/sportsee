/**
 * Format score data to match the chart.
 *
 * @param {number} score
 * @returns {FormattedScoreData[]}
 */
export const formatScoreData = (score: number): FormattedScoreData[] => {
  const formattedScore: any = {
    name: "Score d'aujourd'hui",
    score: score * 100,
    fill: "#ff0000",
  }

  return [formattedScore]
}

interface FormattedScoreData {
  name: string
  score: number
  fill: string
}
