import axios from 'axios'
import { useAppSelector } from '../store/hooks'
import { getModelFromLocalStorage } from '../store/user/user.slice'

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
  }
})

axiosInstance.interceptors.request.use((response) => {
  const token = getModelFromLocalStorage('token')

  if (token) {
    response.headers.Authorization = 'Bearer ' + token
  }
  
  return response
})