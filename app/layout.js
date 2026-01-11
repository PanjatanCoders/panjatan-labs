import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Panjatan Labs | Practical QA Tools',
  description: 'Building practical tools for real-world QA teams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}