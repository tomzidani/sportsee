import { FC } from "react"
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"

interface RadialProps {
  data: any
}

const Radial: FC<RadialProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1}>
      <RadialBarChart barSize={10} data={data} innerRadius={90} style={{ transform: "rotate(-90deg)" }}>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="score" cornerRadius={5} />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default Radial
