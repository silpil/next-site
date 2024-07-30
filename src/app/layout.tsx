import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import StoreProvider from '@/store/StoreProvider'
import './globals.css'

const jost = Jost({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Сериал Ведьмак',
  description: 'Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={`${jost.className} bg-black text-white`}>{children}</body>
      </html>
    </StoreProvider>
  )
}
