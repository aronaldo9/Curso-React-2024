// ---- hacemos un Hook para el contexto en un único fichero ------- (ahorramos código)
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userFirebase, setUserFirebase] = useState(null);

  const signInFirebase = (userData) => {
    setUserFirebase(userData);
  };

  const signOutFirebase = () => {
    setUserFirebase(null);
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
export const useAuthProduct = () => {
  return useContext(AuthContext);
};