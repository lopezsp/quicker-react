import { NavLink } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { GetUserContext } from "../../Context";
import { useContext } from "react";

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(GetUserContext);

  const showProfile = () => {
    context.openUserDetail();
    context.setUserToShow(context.currentUser);
    context.setIFollow("Delete");
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-lime-200'>
      <ul className='flex items-center gap-3'>
        <li className="font-semibold text-lg">
          <NavLink to="/">Quicker</NavLink>
        </li>
        <li>
          <NavLink to='/myfollowers' className={({ isActive }) => isActive ? activeStyle : undefined }>Followers</NavLink>
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
          <button onClick={() => showProfile()} >
            <UserCircleIcon className="h-6 w-6 text-black"></UserCircleIcon>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
