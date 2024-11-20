import type { Metadata } from 'next'
import { HomeView } from '@views/home'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Liga A Next.js template'
}

export default function Home() {
  const cookie = cookies().get('session')



  
  console.log(cookie)
  // if (true) {
  //   redirect('/sign-in')
  // }
  return <HomeView />
}
