import { Container } from "@/components/layout/Container/Container"
import { Aside, Header } from "@components/layout"

export const Profile = () => {
  return (
    <>
      <Header />
      <Aside />

      <main className="app-profile">
        <Container>
          <section className="profile__header">
            <h1 className="header__title">
              Bonjour <b>Thomas</b>
            </h1>

            <p className="header__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </section>

          <section className="profile__content">contenu</section>
        </Container>
      </main>
    </>
  )
}
