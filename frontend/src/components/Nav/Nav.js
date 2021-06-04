import { NavLink } from "react-router-dom";

import "./Nav.css";
export default function Nav({ menuItems }) {
  const menu = menuItems.map(({ link, text }) => (
    <li className="item" key={link}>
      <NavLink to={link} exact activeClassName="active">
        {text}
      </NavLink>
    </li>
  ));
  return <ul className="list-items">{menu}</ul>;
}
