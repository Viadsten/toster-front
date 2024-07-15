import type { Metadata } from 'next'
import { HomeView } from '@views/home'
import SignUpComponent from '@/views/forms/signUp/signUp'

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'UXTester - Регистрация'
}

export default function SignUp() {
  return <SignUpComponent />
}
