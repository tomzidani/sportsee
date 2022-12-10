export const formatActivity = (activity: any) => {
  const formattedActivity: any = []

  activity.forEach((act: any) => {
    formattedActivity.push({
      ...act,
      day: act.day.slice("-1"),
    })
  })

  return formattedActivity
}
