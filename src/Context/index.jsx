import { createContext, useState } from "react";

export const GetUserContext = createContext();

export const GetUserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isUserOpen, setIsUserOpen] = useState(false)
  const openUserDetail = () => setIsUserOpen(true)
  const closeUserDetail = () => setIsUserOpen(false)

  const [userToShow, setUserToShow] = useState({})

  const [quickInfo, setQuickInfo] = useState({})

  const [ tokenAuth, setTokenAuth ] = useState('')

  const [ currentUser, setCurrentUser ] = useState({})

  return (
    <GetUserContext.Provider value={{ currentUser, setCurrentUser, tokenAuth, setTokenAuth, count, setCount, openUserDetail, closeUserDetail, isUserOpen, userToShow, setUserToShow, quickInfo, setQuickInfo }}>
      {children}
    </GetUserContext.Provider>
  );
};
