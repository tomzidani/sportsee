import { FC } from "react"
import { Bar } from "@components/chart"
import { formatActivity } from "@/utils/helpers/activity.helpers"

interface ProfileActivityChartProps {
  activity: any
}

const ProfileActivityChart: FC<ProfileActivityChartProps> = ({ activity }) => {
  const formattedActivity = formatActivity(activity)

  return (
    <div className="profile__activity">
      <h3 className="activity__title">Activité quotidienne</h3>
      <Bar data={formattedActivity} />
    </div>
  )
}

export default ProfileActivityChart
