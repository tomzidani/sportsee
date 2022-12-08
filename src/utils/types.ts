export type UserInformations = {
  performance: PerformanceData
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

export type RadarChartData = [
  {
    subject: string
    A: number
    fullMark: number
    order?: number
  }
]
