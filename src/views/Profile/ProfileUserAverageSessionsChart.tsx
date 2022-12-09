import { FC } from "react"
import { SimpleLine } from "@components/chart"
import { AverageSessionsData } from "@utils/types"
import { formatAverageSessionsData } from "@/utils/helpers/format.helpers"

interface ProfileUserAverageSessionsChartProps {
  averageSessions: AverageSessionsData
}

const ProfileUserAverageSessionsChart: FC<ProfileUserAverageSessionsChartProps> = ({ averageSessions }) => {
  const formattedAverageSessions = formatAverageSessionsData(averageSessions.sessions)

  console.log(formattedAverageSessions)

  return (
    <div className="profile__average-sessions">
      <SimpleLine data={formattedAverageSessions} />
    </div>
  )
}

export default ProfileUserAverageSessionsChart
