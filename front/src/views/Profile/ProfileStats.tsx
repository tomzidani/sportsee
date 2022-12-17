import { FC, Key } from "react"
import { StatCard } from "@components/card"
import { formatStats } from "@utils/helpers/stats.helpers"

interface ProfileStatsProps {
  stats: any
}

const ProfileStats: FC<ProfileStatsProps> = ({ stats }) => {
  const formattedStats = formatStats(stats)

  return (
    <div className="profile__stats">
      {formattedStats.map((stat: any, k: Key) => (
        <StatCard stat={stat} key={k} />
      ))}
    </div>
  )
}

export default ProfileStats
