import { useState, useEffect, useContext } from "react";
import { GetUserContext } from "../../Context";

const Card = (data) => {
  const context = useContext(GetUserContext);
  const [user, setUser] = useState(null);
  const token = context.tokenAuth;

  useEffect(() => {
    fetch(
      `https://quickerfastapi-1-h4833778.deta.app/users/${data.data.by}`,
      { credentials: "include" },
      { Headers: { "Content-Type": "application/json" } }
    )
      .then((response) => response.json())
      .then((u) => setUser(u));
  }, [data.data.by]);

  const showUser = async (userDetail, quick) => {
    context.setUserToShow(userDetail);
    context.setQuickInfo(quick);
    context.openUserDetail();
    context.setIsQuickDetailOpen(false)
      
      if (token != "") {
        const usersIFollow = await fetch(
          "https://quickerfastapi-1-h4833778.deta.app/usersfollowed",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json", auth: token },
          }
        );
        const res = await usersIFollow.json();
      if(context.follow)
        for (let i = 0; i <= res.length; i++) {
          if (res[i]?.user_id == userDetail.user_id) {
            context.setIFollow("Unfollow");
            context.setFollow(false)
            break;
          }
          if (context.follow) {
            context.setIFollow("Follow");
            console.log(context.iFollow)
          }
        }      
        if (userDetail.user_id == context.currentUser.user_id) {
          context.setIFollow("Delete");
        }
      }
  };

  const quickDetail = (quick) => {
    context.setQuickInfo(quick)
    context.setIsQuickDetailOpen(true);
    context.closeUserDetail()
  };

  return (
    <>
      <div className="bg-green-100/60 rounded-lg mt-4 border">
        <figure className="relative mb-2 w-full h-4/5">
          <span onClick={() => showUser(user, data.data)} className="cursor-pointer left-0 bg-green-300 rounded-lg text-black text-xs m-2 px-3 py-0.5">
            {user?.followers}
          </span>
          <p className="w-full object-cover rounded-lg pl-1 pr-1">
            {data.data.content}
          </p>
          <div onClick={() => quickDetail(data.data)} className="cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1">
            +
          </div>
        </figure>

        <p className="flex justify-between">
          <span className="text-sm font-light pl-1">
            {data.data.created_at}
          </span>
          <span className="text-lg font-medium pr-2">{data.data.by}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
