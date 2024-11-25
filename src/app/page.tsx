import type { Metadata } from 'next'
import { HomeView } from '@views/home'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Home',
  description: 'toster'
}

export default function Home() {

  return <HomeView />
}
