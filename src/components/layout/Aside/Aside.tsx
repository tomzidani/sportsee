import { Icon } from "@/components/content"

export const Aside = () => {
  return (
    <aside className="app-aside">
      <div className="aside__wrapper">
        <nav className="aside__nav">
          <ul>
            <li>
              <Icon.Meditate />
            </li>
            <li>
              <Icon.Swim />
            </li>
            <li>
              <Icon.Bike />
            </li>
            <li>
              <Icon.Fitness />
            </li>
          </ul>
        </nav>

        <p className="aside__copyright">Copiryght, SportSee 2022</p>
      </div>
    </aside>
  )
}
