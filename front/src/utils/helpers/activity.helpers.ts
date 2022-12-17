/**
 * Format activity data to match the chart.
 *
 * @param {any} activity
 * @returns {any}
 */
export const formatActivity = (activity: any): any => {
  const formattedActivity: any = []

  activity.forEach((act: any) => {
    formattedActivity.push({
      ...act,
      day: act.day.slice("-1"),
    })
  })

  return formattedActivity
}
