import { XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { GetUserContext } from "../../Context";

const QuickDetail = () => {
  const context = useContext(GetUserContext);

  const deleteHandler = async () => {
    
    const token = context.tokenAuth;

    if (context.currentUser.nick_name == context.quickInfo.by) {
      const quick = await fetch(
        `https://quickerfastapi-1-h4833778.deta.app/quicks/${context.quickInfo.quick_id}/delete`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json", auth: token },
        }
      );
      const res = await quick.json()
      console.log(res)   
      context.setCount(context.count + 1);
      context.setIsQuickDetailOpen(false)
    }
  };

  const updateClick = () => {
    context.openUpdateQuick()
    context.setIsQuickDetailOpen(false)
  }

  return (
    <aside
      className={`${
        context.isQuickDetailOpen ? "flex" : "hidden"
      } quick-detail flex flex-col fixed bg-white left-0 border border-black rounded-lg p-6`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Quick {context.quickInfo.quick_id}</h2>
        <div onClick={() => context.setIsQuickDetailOpen(false)}>
          <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer"></XMarkIcon>
        </div>
      </div>
      <figure className="flex justify-center">
        <UserCircleIcon className="icon w-full h-full rounded-lg border mt-4"></UserCircleIcon>
      </figure>
      <p className="flex flex-col p-6">
        <span className=" font-light text-md">
          By: {context.quickInfo.by}
        </span>
        <span className="font-light text-md">
          Created at: {context.quickInfo.created_at}
        </span>
        <span className="font-light text-md">
          Updated at :{context.quickInfo.updated_at}
        </span>
      </p>
      <div className="flex justify-center">
        <button className={`hover:bg-gray-200 w-24 self-center rounded-lg ${context.currentUser.nick_name == context.quickInfo.by ? 'flex' : 'hidden'}`} onClick={() => deleteHandler()}>Delete</button>        
        <button onClick={() => updateClick()} className={`hover:bg-gray-200 w-24 self-center rounded-lg ${context.currentUser.nick_name == context.quickInfo.by ? 'flex' : 'hidden'}`} >Update</button>        
      </div>
    </aside>
  );
};

export default QuickDetail;