import axios, { AxiosError, AxiosResponse } from "axios"
import { redirect } from "react-router-dom"
import { AverageSessionsData, PerformanceData } from "../types"

export const getUserData = async (userId: string) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}

export const getUserInformations = async (userId: string) => {
  const userPerformances: PerformanceData = await getUserPerformances(userId)
  const userAverageSessions: AverageSessionsData = await getUserAverageSessions(userId)

  return {
    performance: userPerformances,
    averageSessions: userAverageSessions,
  }
}

const getUserPerformances = async (userId: string) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}/performance`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}

const getUserAverageSessions = async (userId: string) => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}/average-sessions`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}
