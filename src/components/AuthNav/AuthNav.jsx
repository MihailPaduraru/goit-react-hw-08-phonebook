import { NavLinkStyles } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <NavLinkStyles to="/register">Register</NavLinkStyles>
      <NavLinkStyles to="/login">Log In</NavLinkStyles>
    </div>
  );
};

export default AuthNav;
