export type UserInformations = {
  activity: any
  performance: PerformanceData
  averageSessions: any
}

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

export type AverageSessionsData = {
  sessions: SessionData[]
  userId: number
}

export type SessionData = {
  day: number
  sessionLength: number
}
export type RadarChartData = [
  {
    subject: string
    A: number
    fullMark: number
    order?: number
  }
]
