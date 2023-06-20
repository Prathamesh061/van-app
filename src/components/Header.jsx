import { Link, NavLink } from "react-router-dom";
import img from "../assets/images/avatar-icon.png";
export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "nav-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "nav-link" : "")}
        >
          Vans
        </NavLink>

        <Link to="login" className="login-link">
          <img src={img} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
