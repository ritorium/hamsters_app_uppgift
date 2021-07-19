import Nav from "../Nav";
import "./Header.css";

const menuItems = [
  { link: "/", text: "Home" },
  { link: "/battle", text: "Game" },
  { link: "/gallery", text: "All members (ADD Your)" },
  { link: "/statistics", text: "Statistics" },
  { link: "/history", text: "History" },
];

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Nav menuItems={menuItems} />
        </nav>
      </div>
    </header>
  );
}
