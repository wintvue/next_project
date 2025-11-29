import { Poppins } from 'next/font/google'
import './ui/global.css'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Joseph',
  description: 'Personal portfolio showcasing my work and skills',
  icons: {
    icon: '/j_icon.ico',     // or '/custom-icon.png'
    shortcut: '/j_icon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-dark-primary text-dark-text`}>
        {children}
      </body>
    </html>
  )
}