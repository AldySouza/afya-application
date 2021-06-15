import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface IRole {
    name: string,
    description: string
}

interface IUser {
    name: string,
    username: string,
    roles: IRole[]
}

const AuthContext = createContext({ signed: false, user: {} as IUser });

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(false);
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    getUser();
  }, [signed])

  const getUser = async () => {
    let data = await localStorage.getItem('@user');
    let user: IUser = JSON.parse(data!);

    let token = await localStorage.getItem('@token');

    user && setUser(user);
    token && setSigned(true);
    api.defaults.headers.Authorization = `Baerer ${token}`;

  }
  
  return (
    <AuthContext.Provider value={{ signed, user }}>
      {children}
    </AuthContext.Provider>
  );

}

export default AuthContext;