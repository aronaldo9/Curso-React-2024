// ---- hacemos un Hook para el contexto en un único fichero ------- (ahorramos código)
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userFirebase, setUser] = useState(null);

  const signInFirebase = (userData) => {
    setUser(userData);
  };

  const signOutFirebase = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ userFirebase, signInFirebase, signOutFirebase }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthProducts = () => {
  return useContext(AuthContext);
};