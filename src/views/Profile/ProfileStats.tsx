import { StatCard } from "@components/card"
import { formatStats } from "@utils/helpers/stats.helpers"
import { FC } from "react"

interface ProfileStatsProps {
  stats: any
}

const ProfileStats: FC<ProfileStatsProps> = ({ stats }) => {
  const formattedStats = formatStats(stats)

  return (
    <div className="profile__stats">
      {formattedStats.map((stat: any) => (
        <StatCard stat={stat} />
      ))}
    </div>
  )
}

export default ProfileStats
