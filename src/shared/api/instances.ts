import axios from 'axios'

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTczMjEzMzUxMiwiZXhwIjoxNzM0NzI1NTEyfQ.n6T_DcPwI6e1wb7-m_xl0MhlBYzjqXBnHQGmx45e7VI',
    'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTczMjEzMzUxMiwiZXhwIjoxNzM0NzI1NTEyfQ.n6T_DcPwI6e1wb7-m_xl0MhlBYzjqXBnHQGmx45e7VI'    
  }
})
