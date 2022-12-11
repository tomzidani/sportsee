import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Aside, Container, Header } from "@components/layout"
import { UserInformations } from "@utils/types"
import { getUserData, getUserInformations } from "@utils/helpers/data.helpers"
import { isEmptyObject } from "@utils/helpers/validation.helpers"

import ProfilePerformanceChart from "./ProfilePerformanceChart"
import ProfileScoreChart from "./ProfileScoreChart"
import ProfileUserAverageSessionsChart from "./ProfileUserAverageSessionsChart"
import ProfileStats from "./ProfileStats"
import ProfileActivityChart from "./ProfileActivity"

export const Profile = () => {
  const [user, setUser] = useState<any>(null)
  const [userInformations, setUserInformations] = useState<UserInformations | null>(null)

  const navigate = useNavigate()

  const { id: userId } = useParams()

  const getUser = async () => {
    const userData = await getUserData(userId!)
    const userInformations = await getUserInformations(userId!)

    if (!userData || isEmptyObject(userInformations)) {
      navigate("/")
    }

    setUser(userData)
    setUserInformations(userInformations)
  }

  if (userId && !user) getUser()

  return (
    <>
      <Header />
      <Aside />

      {user && (
        <main className="app-profile">
          <Container>
            {/* Introduction */}
            <section className="profile__introduction">
              <h1 className="profile__title">
                Bonjour <b>{user!.userInfos.firstName}</b>
              </h1>
              <p className="profile__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>

            {/* Informations */}
            <section className="profile__informations">
              {/* Details */}
              <div className="profile__details">
                {/* Activity */}
                <ProfileActivityChart activity={userInformations!.activity.sessions} />

                {/* Charts */}
                <div className="profile__charts">
                  <ProfileUserAverageSessionsChart averageSessions={userInformations!.averageSessions} />
                  <ProfilePerformanceChart performance={userInformations!.performance} />
                  <ProfileScoreChart score={user.todayScore || user.score} />
                </div>
              </div>

              {/* Stats */}
              <ProfileStats stats={user.keyData!} />
            </section>
          </Container>
        </main>
      )}
    </>
  )
}
