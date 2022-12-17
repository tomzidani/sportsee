import { FC } from "react"

interface StatCardProps {
  stat: any
}

const StatCard: FC<StatCardProps> = ({ stat }) => {
  const StatIcon = stat.icon

  return (
    <article className={`stat-card ${stat.id}`}>
      <div className="card__wrapper">
        <div className="card__icon">
          <StatIcon />
        </div>
        <div className="card__infos">
          <h4 className="card__title">{stat.value}</h4>
          <span className="card__label">{stat.label}</span>
        </div>
      </div>
    </article>
  )
}

export default StatCard
