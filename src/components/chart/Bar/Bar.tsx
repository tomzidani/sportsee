import { FC } from "react"
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar as B, Legend } from "recharts"

interface BarProps {
  data: any
}

const Bar: FC<BarProps> = ({ data }) => {
  const BarToolTip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null

    const calories = `${payload[0].payload.calories}kCal`
    const kilogram = `${payload[0].payload.kilogram}kg`

    return (
      <div className="tooltip">
        <b>{kilogram}</b>
        <b>{calories}</b>
      </div>
    )
  }

  const renderLegendText = (value: string, entry: any) => {
    return <span style={{ color: "#74798C", fontSize: 14, marginLeft: 10 }}>{value}</span>
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#DEDEDE" vertical={false} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            stroke="#74798C"
            formatter={renderLegendText}
          />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#9B9EAC", fontWeight: 400 }} />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontWeight: 400 }}
            type="number"
          />
          <Tooltip content={<BarToolTip />} />
          <B name="Calories brûlées (kCal)" dataKey="kilogram" fill="#000" barSize={7} radius={5} />
          <B name="Poids (kg)" dataKey="calories" fill="#E60000" barSize={7} radius={5} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Bar
