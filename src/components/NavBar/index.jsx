import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex items-center gap-3'>
        <li className="font-semibold text-lg">
          <NavLink to="/">Quicker</NavLink>
        </li>
        <li>
          <NavLink to="/myfollowers" className={({ isActive }) => isActive ? activeStyle : undefined }>Followers</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink to="/signup" className={({ isActive }) => isActive ? activeStyle : undefined }>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? activeStyle : undefined }>Log In</NavLink>
        </li>
        <li>
          <NavLink to="/users/{id}" className={({ isActive }) => isActive ? activeStyle : undefined }>My Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
