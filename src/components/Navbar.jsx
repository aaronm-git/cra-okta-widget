import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <XNavBar
      buttons={[
        <Link to="/login" className="btn btn-outline-dark">
          Login
        </Link>,
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      ]}
    >
      <XNavLink to="/">Home</XNavLink>
      <XNavLink to="/about">About</XNavLink>
      <XNavLink to="/contact">Contact</XNavLink>
    </XNavBar>
  );
}

const XNavLink = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${isActive && 'font-weight-bold'} p-2 text-dark`
      }
    >
      {children}
    </NavLink>
  );
};

const XNavBar = ({ children, ...props }) => {
  const hasButton = props.buttons.length ? true : false;
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto text-uppercase">Okta Test App</h5>
      <nav className="my-2 my-md-0 mr-md-3">{children}</nav>
      {hasButton && (
        <div className="btn-group">
          {props.buttons.map((button, index) => (
            <div
              key={index}
              className={`${index !== props.buttons.length - 1 && 'mr-2'}`}
            >
              {button}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
