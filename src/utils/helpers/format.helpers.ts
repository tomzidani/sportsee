import { PerformanceData } from "../types"

export const formatPerformanceData = ({ data, kind }: PerformanceData) => {
  const formattedPerformanceData: any = []

  data.forEach((d: any) => {
    const subject = kind[d.kind]

    const formattedData = {
      ...formatPerformanceSubjectName(subject),
      A: d.value,
      fullMark: 200,
    }

    formattedPerformanceData.push(formattedData)
  })

  const sortedPerformanceData = formattedPerformanceData.sort((a: any, b: any) => a.order - b.order)

  return sortedPerformanceData
}

const formatPerformanceSubjectName = (subjectName: string) => {
  const formattedPerformanceSubjectName: { [key: string]: { subject: string; order: number } } = {
    cardio: { subject: "Cardio", order: 6 },
    energy: { subject: "Énergie", order: 5 },
    endurance: { subject: "Endurance", order: 4 },
    strength: { subject: "Force", order: 3 },
    speed: { subject: "Vitesse", order: 2 },
    intensity: { subject: "Intensité", order: 1 },
  }

  return formattedPerformanceSubjectName[subjectName] || subjectName
}
