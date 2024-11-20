import { atom } from "jotai";
import { IUser } from "../api/user";



const getUserFromLocalStorage = () => {
  
  return null
}

const userAtom = atom<IUser | null>(getUserFromLocalStorage())

export default userAtom;
