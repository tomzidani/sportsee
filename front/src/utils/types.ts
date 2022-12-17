import { PerformanceData } from "./helpers/performance.helpers"

export type UserInformations = {
  activity: any
  performance: PerformanceData
  averageSessions: any
}

export type AverageSessionsData = {
  sessions: SessionData[]
  userId: number
}

export type SessionData = {
  day: number
  sessionLength: number
}
