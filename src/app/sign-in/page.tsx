import type { Metadata } from 'next'
import { HomeView } from '@views/home'
import SignUpComponent from '@/views/forms/signUp/signUp'
import SignInComponent from '@/views/forms/signIn/signIn'

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'UXTester - Регистрация'
}

export default function SignIn() {
  return <SignInComponent />
}
