import { XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { GetUserContext } from "../../Context";

const UserDetail = () => {
  const context = useContext(GetUserContext);
    
  const onClickHandler = async () => {    
    const datos = { "follower_id": 0 , "user_followed_id": context.userToShow.user_id }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6InN0cmluZ3N0In0.CMaM-55DonarS4slJ4w4RgrjkeWMzxbFoCNX82raO4U"

    const follow = await fetch(
      "https://quickerfastapi-1-h4833778.deta.app/follow",{
        method: 'POST',
        credentials: "include" ,
        headers: { "Content-Type": "application/json", "auth": token } ,
        body: JSON.stringify(datos),
      }        
    )
    const res = await follow.json()
    console.log(res) 
  }




  
  return (
    <aside
      className={`${
        context.isUserOpen ? "flex" : "hidden"
      } user-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg p-6`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">{context.userToShow.nick_name}</h2>
        <div onClick={() => context.closeUserDetail()}>
          <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer"></XMarkIcon>
        </div>
      </div>
      <figure>
        <UserCircleIcon className="w-full h-full rounded-lg border mt-4"></UserCircleIcon>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">Email:{context.userToShow.email}</span>
        <span className="font-medium text-2xl">Name: {context.userToShow.first_name}</span>
        <span className="font-medium text-2xl">Lastname: {context.userToShow.last_name}</span>
        <span className="font-medium text-2xl">Birthdate: {context.userToShow.birth_date}</span>
        <span className="font-medium text-2xl">Followers: {context.userToShow.followers}</span>
     </p>
     <button onClick={() => onClickHandler()}>
        Follow
     </button>
    </aside>
  );
};

export default UserDetail;
