import { XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GetUserContext } from "../../Context";

const UserDetail = () => {
  const context = useContext(GetUserContext);

  const onClickHandler = async () => {
    const datos = {
      follower_id: 0,
      user_followed_id: context.userToShow.user_id,
    };
    const token = context.tokenAuth;
    
    if (context.iFollow == "Follow") {
      const follow = await fetch(
        `https://quickerfastapi-1-h4833778.deta.app/follow`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", auth: token },
          body: JSON.stringify(datos),
        }
      );
      const res = await follow.json();
      console.log(res);
      context.closeUserDetail()
    } else if (context.iFollow == "Unfollow") {
      const unfollow = await fetch(
        `https://quickerfastapi-1-h4833778.deta.app/unfollow`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json", auth: token },
          body: JSON.stringify(datos),
        }
      );
      const res = await unfollow.json();
      console.log(res);
      context.closeUserDetail()
    } else if (context.iFollow == "Delete") {
      const deleteUser = await fetch(
        `https://quickerfastapi-1-h4833778.deta.app/users/delete`,
        {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json", auth: token },
        }
      );
      const res = await deleteUser.json();
      console.log(res);
      context.setTokenAuth('')
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('first_name')
      localStorage.removeItem('birth_date')
      localStorage.removeItem('nick_name')
      localStorage.removeItem('last_name')
      localStorage.removeItem('email')
      localStorage.removeItem('followers')
      context.closeUserDetail()
    }
  };

  return (
    <aside
      className={`${
        context.isUserOpen ? "flex" : "hidden"
      } user-detail flex flex-col fixed bg-white left-0 border border-black rounded-lg p-6`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">{context.userToShow.nick_name}</h2>
        <div onClick={() => context.closeUserDetail()}>
          <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer"></XMarkIcon>
        </div>
      </div>
      <figure className="flex justify-center">
        <UserCircleIcon className="icon w-full h-full rounded-lg border mt-4"></UserCircleIcon>
      </figure>
      <p className="flex flex-col p-6">
        <span className="letra font-light text-md">
          Email:{context.userToShow.email}
        </span>
        <span className="letra font-light text-md ">
          Name: {context.userToShow.first_name}
        </span>
        <span className="letra font-light text-md">
          Lastname: {context.userToShow.last_name}
        </span>
        <span className="letra font-light text-md">
          Birthdate: {context.userToShow.birth_date}
        </span>
        <span className="letra font-light text-md">
          Followers: {context.userToShow.followers}
        </span>
      </p>
      <div className="flex justify-center">
        <button className="hover:bg-gray-200 w-24 self-center rounded-lg" onClick={() => onClickHandler()}>{context.iFollow}</button>
        <NavLink to='/update' className={context.currentUser.user_id == context.userToShow.user_id ? 'flex' : 'hidden'}>
          <button  className="hover:bg-gray-200 w-24 self-center rounded-lg">Update</button>
        </NavLink>
      </div>
    </aside>
  );
};

export default UserDetail;
