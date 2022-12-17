import { FC } from "react"
import { Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis } from "recharts"

interface SimpleLineProps {
  data: any
}

const SimpleLine: FC<SimpleLineProps> = ({ data }) => {
  const SimpleLineToolTip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null

    const dayTrainingTime = payload[0].payload.value

    return <div className="tooltip">{dayTrainingTime} min</div>
  }

  const SimpleLineCursor = ({ points }: any) => {
    const { x } = points[0]

    return <Rectangle fill="#000" opacity={0.1} width={265} height={265} x={x} />
  }

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1}>
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#fff", opacity: 0.5, fontSize: 12, x: 15 }}
          padding={{ left: 15, right: 15 }}
        />

        <Tooltip
          content={<SimpleLineToolTip />}
          allowEscapeViewBox={{ x: true, y: true }}
          cursor={<SimpleLineCursor />}
        />
        <Line
          type="natural"
          dataKey="value"
          stroke="#fff"
          strokeWidth={2}
          dot={{ display: "none" }}
          activeDot={{
            width: 8,
            height: 8,
            fill: "#FFF",
            stroke: "#fff",
            strokeWidth: 8,
            strokeOpacity: 0.3,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SimpleLine
