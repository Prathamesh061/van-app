import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const navLink = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: "600",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? navLink : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? navLink : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? navLink : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? navLink : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
