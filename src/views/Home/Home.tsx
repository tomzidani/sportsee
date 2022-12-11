import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="app-home">
      <div className="home__wrapper">
        <section className="home__header">
          <h1 className="home__title">SportSee</h1>
          <p className="home__text">La plateforme de coaching sportif en ligne</p>
        </section>
        <section className="home__users">
          <ul>
            <li>
              <Link to="/profil/12">User 12</Link>
            </li>
            <li>
              <Link to="/profil/18">User 18</Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Home
