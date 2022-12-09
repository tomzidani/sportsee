import { PerformanceData, SessionData } from "../types"

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

export const formatScoreData = (score: number) => {
  return [
    {
      name: "Score d'aujourd'hui",
      score: score * 100,
      fill: "#ff0000",
    },
  ]
}

export const formatAverageSessionsData = (sessions: SessionData[]) => {
  const formattedAverageSessions: any = []

  sessions.forEach((s) => {
    const formattedDay = formatAverageSessionDay(s.day)

    formattedAverageSessions.push({
      day: formattedDay,
      value: s.sessionLength,
    })
  })

  return formattedAverageSessions
}

const formatAverageSessionDay = (day: number) => {
  const averageSessionDay: { [key: number]: string } = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  }

  return averageSessionDay[day]
}
