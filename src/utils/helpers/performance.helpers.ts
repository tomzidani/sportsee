/**
 * Format performance data to match the chart.
 *
 * @param {PerformanceData} performanceData
 * @returns {PerformanceFormattedData[]}
 */
export const formatPerformanceData = ({ data, kind }: PerformanceData): PerformanceFormattedData[] => {
  const formattedPerformanceData: PerformanceFormattedData[] = []

  data.forEach((d: any) => {
    const subject = kind[d.kind]

    const formattedData = {
      ...formatPerformanceSubjectName(subject),
      A: d.value,
      fullMark: 200,
    }

    formattedPerformanceData.push(formattedData)
  })

  const sortedPerformanceData = formattedPerformanceData.sort(
    (a: PerformanceFormattedData, b: PerformanceFormattedData) => a.order - b.order
  )

  return sortedPerformanceData
}

/**
 * Format performance subject name.
 *
 * @param {string} subjectName
 * @returns {PerformanceSubjectName}
 */
const formatPerformanceSubjectName = (subjectName: string): PerformanceSubjectName => {
  const formattedPerformanceSubjectName: PerformanceSubjectNameObj = {
    cardio: { subject: "Cardio", order: 6 },
    energy: { subject: "Énergie", order: 5 },
    endurance: { subject: "Endurance", order: 4 },
    strength: { subject: "Force", order: 3 },
    speed: { subject: "Vitesse", order: 2 },
    intensity: { subject: "Intensité", order: 1 },
  }

  return formattedPerformanceSubjectName[subjectName]
}

/**
 * Performance types.
 */
export type PerformanceData = {
  data: [
    {
      value: number
      kind: number
    }
  ]
  kind: { [key: number]: string }
  userId: number
}

export interface PerformanceFormattedData extends PerformanceSubjectName {
  A: number
  fullMark: number
}

type PerformanceSubjectNameObj = {
  [key: string]: PerformanceSubjectName
}

type PerformanceSubjectName = {
  subject: string
  order: number
}
