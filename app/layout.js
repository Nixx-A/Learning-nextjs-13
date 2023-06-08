import './globals.css'
import { inter } from './fonts'
import { Header } from './Components/Header'

export const metadata = {
  title: 'Blog practice',
  description: 'Nico blog'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <Header />
        {children}
      </body>
    </html>
  )
}
