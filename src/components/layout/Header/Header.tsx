import logo from "@assets/img/logo.svg"

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="Logo SportSee" />
        </div>

        <nav className="header__nav">
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
