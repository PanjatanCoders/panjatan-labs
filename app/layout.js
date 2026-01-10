import './globals.css'

export const metadata = {
  title: 'Panjatan Labs | Practical QA Tools',
  description: 'Building practical tools for real-world QA teams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}