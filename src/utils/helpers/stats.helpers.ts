import { Icon } from "@components/content"

/**
 * Format stats data.
 *
 * @param stats
 * @returns
 */
export const formatStats = (stats: any) => {
  const formattedStats: any = []
  const statsArr = Object.keys(stats)

  statsArr.forEach((statName: string) => {
    const id = getStatId(statName)
    const icon = getStatIcon(statName)
    const label = formatStatLabel(statName)
    const value = formatStatValue(statName, stats[statName])

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

/**
 * Get stat id by stat name.
 *
 * @param {string} statName
 * @returns {string}
 */
const getStatId = (statName: string): string => {
  const idObj: any = {
    calorieCount: "calorie",
    carbohydrateCount: "carbohydrate",
    lipidCount: "lipid",
    proteinCount: "protein",
  }

  return idObj[statName] || statName
}

/**
 * Get stat icon by stat name.
 *
 * @param {string} statName
 * @returns {React.FunctionComponent}
 */
const getStatIcon = (statName: string): React.FunctionComponent => {
  const iconObj: any = {
    calorieCount: Icon.Energy,
    carbohydrateCount: Icon.Apple,
    lipidCount: Icon.Cheeseburger,
    proteinCount: Icon.Chicken,
  }

  return iconObj[statName] || null
}

/**
 * Format stats label by stat name.
 *
 * @param {string} statName
 * @returns {string}
 */
const formatStatLabel = (statName: string): string => {
  const labelObj: any = {
    calorieCount: "Calories",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
    proteinCount: "Protéines",
  }

  return labelObj[statName] || statName
}

/**
 * Format stat value by stat name.
 *
 * @param {string} statName
 * @param {string} val
 * @returns {string}
 */
const formatStatValue = (statName: string, val: string): string => {
  const valuesObj: any = {
    calorieCount: `${val}kCal`,
    carbohydrateCount: `${val}g`,
    lipidCount: `${val}g`,
    proteinCount: `${val}g`,
  }

  return valuesObj[statName] || val
}
