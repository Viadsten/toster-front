import { useRouter } from "next/navigation"
import { axiosInstance } from "./instances"

export interface IUser {
  email: string,
  name: string,
  id: number,
  isAccess: boolean,
}


export function signUpAction(userData: {email: string, password: string}) {
  return axiosInstance.post<IUser>('/auth/register', userData)
}

export function signInAction(userData: {email: string, password: string}) {
  return axiosInstance.post<IUser>('/auth/login', userData)
}

export function getUserByIdAction(id: number) {
  return axiosInstance.get<IUser>(`users/${id}`)
}

export function getUsersAction() {
  return axiosInstance.get<IUser>(`users`)
}

export function getCurrentUserAction() {
  return axiosInstance.get<IUser>(`currentUser`)
}

export function logoutAction() {
  return axiosInstance.post<null>(`/auth/logout`)
}