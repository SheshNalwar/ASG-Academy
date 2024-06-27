import { NavLink } from "react-router-dom";
const NavLinkRoutes = ({ to, name }) => {
  return (
    <NavLink to={to} activeclassname="active">
      {name}
    </NavLink>
  );
};

export default NavLinkRoutes;
