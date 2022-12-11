import { FC } from "react"
import { Radial } from "@components/chart"
import { formatScoreData } from "@utils/helpers/score.helpers"

interface ProfileScoreChartProps {
  score: number
}

const ProfileScoreChart: FC<ProfileScoreChartProps> = ({ score }) => {
  const scoreFormattedData = formatScoreData(score as number)

  return (
    <div className="profile__score">
      <span className="score__label">Score</span>
      <Radial data={scoreFormattedData} />

      <div className="score__details">
        <b className="score__score">{score * 100}%</b>
        <p className="score__text">de votre objectif</p>
      </div>
    </div>
  )
}

export default ProfileScoreChart
