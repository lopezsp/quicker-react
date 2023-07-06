import { createContext, useState } from "react";

export const GetUserContext = createContext();

export const GetUserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isUserOpen, setIsUserOpen] = useState(false)
  const openUserDetail = () => setIsUserOpen(true)
  const closeUserDetail = () => setIsUserOpen(false)

  const [userToShow, setUserToShow] = useState({})

  return (
    <GetUserContext.Provider value={{ count, setCount, openUserDetail, closeUserDetail, isUserOpen, userToShow, setUserToShow }}>
      {children}
    </GetUserContext.Provider>
  );
};
