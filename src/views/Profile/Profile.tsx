import { useState } from "react"
import { Aside, Container, Header } from "@components/layout"
import { getUserData, getUserInformations } from "@/utils/helpers/data.helpers"
import { redirect, useParams } from "react-router-dom"
import ProfilePerformanceChart from "./ProfilePerformanceChart"
import { UserInformations } from "@/utils/types"

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
              <div className="profile__charts">
                <ProfilePerformanceChart performance={userInformations!.performance} />
              </div>
            </section>
          </Container>
        </main>
      )}
    </>
  )
}
