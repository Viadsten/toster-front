import axios from 'axios'

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzMyMjE3NDQ4LCJleHAiOjE3MzQ4MDk0NDh9.a-1NHLfLZUHN9vkE3dKcqFG4K1X-gCHiaGlYxmyGCAc',
  }
})
