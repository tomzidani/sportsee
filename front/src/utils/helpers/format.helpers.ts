import { SessionData } from "../types"

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
