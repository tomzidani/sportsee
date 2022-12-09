import { Icon } from "@components/content"

export const formatStats = (stats: any) => {
  const formattedStats: any = []
  const statsArr = Object.keys(stats)

  statsArr.forEach((statName: string) => {
    const id = getStatId(statName)
    const icon = getStatIcon(statName)
    const label = formatStatsLabel(statName)
    const value = formatStatsValue(statName, stats[statName])

    const formattedStatObj = {
      id,
      icon,
      label,
      value,
    }

    formattedStats.push(formattedStatObj)
  })

  return formattedStats
}

const getStatId = (statName: string) => {
  const idObj: any = {
    calorieCount: "calorie",
    carbohydrateCount: "carbohydrate",
    lipidCount: "lipid",
    proteinCount: "protein",
  }

  return idObj[statName] || statName
}

const getStatIcon = (statName: string) => {
  const iconObj: any = {
    calorieCount: Icon.Energy,
    carbohydrateCount: Icon.Apple,
    lipidCount: Icon.Cheeseburger,
    proteinCount: Icon.Chicken,
  }

  return iconObj[statName] || null
}

const formatStatsLabel = (statName: string) => {
  const labelObj: any = {
    calorieCount: "Calories",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
    proteinCount: "Protéines",
  }

  return labelObj[statName] || statName
}

const formatStatsValue = (statName: string, val: string) => {
  const valuesObj: any = {
    calorieCount: `${val}kCal`,
    carbohydrateCount: `${val}g`,
    lipidCount: `${val}g`,
    proteinCount: `${val}g`,
  }

  return valuesObj[statName] || val
}
