import { FC } from "react"
import { Radar } from "@components/chart"
import { formatPerformanceData, PerformanceData } from "@/utils/helpers/performance.helpers"

interface ProfilePerformanceChartProps {
  performance: PerformanceData
}

const ProfilePerformanceChart: FC<ProfilePerformanceChartProps> = ({ performance }) => {
  const performanceFormattedData = formatPerformanceData(performance)

  return (
    <div className="profile__performance">
      <Radar data={performanceFormattedData} />
    </div>
  )
}

export default ProfilePerformanceChart
