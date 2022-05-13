import { Icon } from "@components/content"

const Aside = () => {
  return (
    <aside className="app-aside">
      <div className="aside__wrapper">
        <ul className="aside__categories">
          <li>
            <Icon.Meditation />
          </li>
          <li>
            <Icon.Swim />
          </li>
          <li>
            <Icon.Cycling />
          </li>
          <li>
            <Icon.BodyBuilding />
          </li>
        </ul>

        <p className="aside__copyright">Copyright, SportSee 2022</p>
      </div>
    </aside>
  )
}

export default Aside
