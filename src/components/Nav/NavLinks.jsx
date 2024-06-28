import { NavLinkRoutes } from "../../Index";
const NavLinks = () => {
  return (
    <>
      <NavLinkRoutes to="/" name="Home" />
      <NavLinkRoutes to="/about" name="About Us" />
      <NavLinkRoutes to="/courses" name="Courses" />
      <NavLinkRoutes to="/gallery" name="Gallery" />
      <NavLinkRoutes to="/achievements" name="Achievements" />
    </>
  );
};
export default NavLinks;
