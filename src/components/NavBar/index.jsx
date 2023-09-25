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

  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('first_name')
    localStorage.removeItem('birth_date')
    localStorage.removeItem('nick_name')
    localStorage.removeItem('last_name')
    localStorage.removeItem('email')
    localStorage.removeItem('followers')
    window.location.reload()
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-green-300'>
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
        <li className={localStorage.getItem('token') ? 'flex' : 'hidden'}>
          <NavLink onClick={() => handleClick()}>Log Out</NavLink>
        </li>
        <li className={localStorage.getItem('token') ? 'hidden' : 'flex'}>
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
