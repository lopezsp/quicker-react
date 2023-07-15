import { createContext, useState } from "react";

export const GetUserContext = createContext();

export const GetUserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isUserOpen, setIsUserOpen] = useState(false);
  const openUserDetail = () => setIsUserOpen(true);
  const closeUserDetail = () => {
    setIsUserOpen(false);
    setShowButton(false)
  };

  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const openQuickPost = () => setIsQuickOpen(true);
  const closeQuickPost = () => setIsQuickOpen(false);

  const [userToShow, setUserToShow] = useState({});

  const [quickInfo, setQuickInfo] = useState({});

  const [tokenAuth, setTokenAuth] = useState("");

  const [currentUser, setCurrentUser] = useState({});

  const [iFollow, setIFollow] = useState(true)

  const [showButton, setShowButton] = useState(false)

  return (
    <GetUserContext.Provider
      value={{
        showButton,
        setShowButton,
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
