import { useState } from "react"
import { Aside, Container, Header } from "@components/layout"
import { getUserData, getUserInformations } from "@/utils/helpers/data.helpers"
import { redirect, useParams } from "react-router-dom"
import ProfilePerformanceChart from "./ProfilePerformanceChart"
import { UserInformations } from "@/utils/types"
import ProfileScoreChart from "./ProfileScoreChart"
import ProfileUserAverageSessionsChart from "./ProfileUserAverageSessionsChart"
import ProfileStats from "./ProfileStats"
import ProfileActivityChart from "./ProfileActivity"

export const Profile = () => {
  const [user, setUser] = useState<any>(null)
  const [userInformations, setUserInformations] = useState<UserInformations | null>(null)

  const { id: userId } = useParams()

  const getUser = async () => {
    const userData = await getUserData(userId!)
    const userInformations = await getUserInformations(userId!)

    if (!userData || !userInformations) redirect("/")

    setUser(userData)
    setUserInformations(userInformations)
  }

  if (userId && !user) getUser()

  console.log(userInformations)

  return (
    <>
      <Header />
      <Aside />

      {user && (
        <main className="app-profile">
          <Container>
            <section className="profile__introduction">
              <h1 className="profile__title">
                Bonjour <b>{user!.userInfos.firstName}</b>
              </h1>
              <p className="profile__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>

            <section className="profile__informations">
              <div className="profile__details">
                <ProfileActivityChart activity={userInformations!.activity.sessions} />
                <div className="profile__charts">
                  <ProfileUserAverageSessionsChart averageSessions={userInformations!.averageSessions} />
                  <ProfilePerformanceChart performance={userInformations!.performance} />
                  <ProfileScoreChart score={user.todayScore || user.score} />
                </div>
              </div>
              <ProfileStats stats={user.keyData!} />
            </section>
          </Container>
        </main>
      )}
    </>
  )
}
