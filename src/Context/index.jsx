import { createContext, useState } from "react";

export const GetUserContext = createContext();

export const GetUserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isUserOpen, setIsUserOpen] = useState(false);
  const openUserDetail = () => setIsUserOpen(true);
  const closeUserDetail = () => {
    setIsUserOpen(false);
    setIFollow('')
    setFollow(true)
  };

  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const openQuickPost = () => setIsQuickOpen(true);
  const closeQuickPost = () => setIsQuickOpen(false);

  const [isUpdateQuickOpen, setIsUpdateQuickOpen] = useState(false)
  const openUpdateQuick = () => setIsUpdateQuickOpen(true)
  const closeUpdateQuick = () => setIsUpdateQuickOpen(false);

  const [isQuickDetailOpen, setIsQuickDetailOpen] = useState(false);
  
  const [userToShow, setUserToShow] = useState({});

  const [quickInfo, setQuickInfo] = useState({});

  const [tokenAuth, setTokenAuth] = useState(localStorage.getItem('token'));

  const current_user = {
    "user_id": localStorage.getItem('user_id'),
    "first_name": localStorage.getItem('first_name'),
    "birth_date": localStorage.getItem('birth_date'),
    "nick_name": localStorage.getItem('nick_name'),
    "last_name": localStorage.getItem('last_name'),
    "email": localStorage.getItem('email'),
    "followers": localStorage.getItem('followers')
  }

  const [currentUser, setCurrentUser] = useState(current_user);

  const [iFollow, setIFollow] = useState('')

  const [follow, setFollow] = useState(true)

    return (
    <GetUserContext.Provider
      value={{
        isUpdateQuickOpen,
        openUpdateQuick,
        closeUpdateQuick,
        isQuickDetailOpen,
        setIsQuickDetailOpen,
        follow,
        setFollow,
        iFollow,
        setIFollow,
        isQuickOpen,
        openQuickPost,
        closeQuickPost,
        currentUser,
        setCurrentUser,
        tokenAuth,
        setTokenAuth,
        count,
        setCount,
        openUserDetail,
        closeUserDetail,
        isUserOpen,
        userToShow,
        setUserToShow,
        quickInfo,
        setQuickInfo,
      }}
    >
      {children}
    </GetUserContext.Provider>
  );
};
