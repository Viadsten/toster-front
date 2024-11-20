import type { Metadata } from 'next'
import { HomeView } from '@views/home'
import { Wrapper, Heading, Button } from '@/ui'

export const metadata: Metadata = {
  title: 'Страницы проекта',
  description: 'UXTester - Sitemap'
}

export default function Sitemap() {
  return (
    <main>
      <Wrapper>
        <Heading tagName="h1">
          Sitemap
        </Heading>
        <Button as='a' href='/sign-in'>Авторизация</Button>
        <Button as='a' href='/sign-up'>Регистрация</Button>
        <Button as='a' href='/'>Главная (папки с тестами)</Button>
        <Button as='a' href='/test/1'>Страница теста</Button>
      </Wrapper>
    </main>
  )
}
