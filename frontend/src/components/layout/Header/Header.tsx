import logo from "@assets/img/logo.svg"

const Header = () => {
  return (
    <header className="app-header">
      <div className="header__wrapper">
        <img src={logo} alt="SportSee" className="header__logo" />

        <nav className="header__nav">
          <ul>
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#profile">Profil</a>
            </li>
            <li>
              <a href="#settings">Réglage</a>
            </li>
            <li>
              <a href="#community">Communauté</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
