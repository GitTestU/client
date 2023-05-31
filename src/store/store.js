import {create} from "zustand";

export const useStateManage = create((set) => ({
    isLoggedIn : false,
    setLoggedIn : (e) => set(() => ({ isLoggedIn : e}))
}))