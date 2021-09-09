import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services";

interface IUserInfo {
    id: string;
    username: any;
    email: any;
  }

interface IProfileContextData {
    userInfo: { username: string };
    getUser: () => void;
  }

interface IProviderProps {
    children: ReactNode;
}

const ProfileContext = createContext<IProfileContextData>({} as IProfileContextData)

export const ProfileProvider = ({ children }: IProviderProps) => {
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)

    const token = JSON.parse(localStorage.getItem("token") || "null");
    const id = JSON.parse(localStorage.getItem("Id") || "null");
    
    const getUser = async () => {
        const resp = await api.get(`users/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setUserInfo(resp.data)
    }

    return (
        <ProfileContext.Provider value={{ userInfo, getUser }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)