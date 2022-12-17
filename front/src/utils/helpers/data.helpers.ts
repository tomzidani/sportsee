import axios, { AxiosError, AxiosResponse } from "axios"
import { redirect } from "react-router-dom"
import { AverageSessionsData } from "../types"
import { PerformanceData } from "./performance.helpers"

/**
 * Get user data.
 *
 * @param {string} userId
 * @returns {Promise<any>}
 */
export const getUserData = async (userId: string): Promise<any> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)

      // Display error informations only in this case,
      // if API is not online, we get multiples errors alert
      // so we just get one here.
      if (err.code === "ERR_NETWORK") {
        alert("Une erreur est survenue, contactez les administrateurs du site ou veuillez réessayer plus tard.")
      }

      redirect("/")
    })
}

/**
 * Get user informations.
 *
 * @param {string} userId
 * @returns {Promise<any>}
 */
export const getUserInformations = async (userId: string): Promise<any> => {
  const userActivity: any = await getUserActivity(userId)
  const userPerformances: PerformanceData = await getUserPerformances(userId)
  const userAverageSessions: AverageSessionsData = await getUserAverageSessions(userId)

  return {
    activity: userActivity,
    performance: userPerformances,
    averageSessions: userAverageSessions,
  }
}

/**
 * Get user performances.
 *
 * @param {string} userId
 * @returns {Promise<any>}
 */
const getUserPerformances = async (userId: string): Promise<any> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}/performance`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}

/**
 * Get user average sessions.
 *
 * @param {string} userId
 * @returns {Promise<any>}
 */
const getUserAverageSessions = async (userId: string): Promise<any> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}/average-sessions`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}

/**
 * Get user activity.
 *
 * @param {string} userId
 * @returns {Promise<any>}
 */
const getUserActivity = async (userId: string): Promise<any> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}/activity`)
    .then((res: AxiosResponse) => res.data.data)
    .catch((err: AxiosError) => {
      console.error(err)
      redirect("/")
    })
}
