import { PerformanceFormattedData } from "@utils/helpers/performance.helpers"
import { FC } from "react"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar as R, PolarRadiusAxis } from "recharts"

interface RadarProps {
  data: PerformanceFormattedData[]
}

const Radar: FC<RadarProps> = ({ data }) => {
  return (
    <ResponsiveContainer minWidth="100%" minHeight="100%" aspect={1}>
      <RadarChart data={data} margin={{ left: 25, right: 25, top: 5, bottom: 5 }}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#FFF", fontSize: 12 }} />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <R name="Performances" dataKey="A" fill="#FF0101" opacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default Radar
