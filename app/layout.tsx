import './ui/global.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
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