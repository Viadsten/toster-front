import { axiosInstance } from "./instances"

export interface IUser {
  email: string,
  name: string,
  id: number,
  isAccess: boolean
}


export function signUpAction(userData: {email: string, password: string}) {
  return axiosInstance.post<IUser>('/auth/register', userData)
}

export function signInAction(userData: {email: string, password: string}) {
  return axiosInstance.post<IUser>('/auth/login', userData)
}

export function getUserByIdAction(id: number) {
  return axiosInstance.post<IUser>(`users/${id}`)
}

export function getUsersAction() {
  return axiosInstance.post<IUser>(`users`)
}