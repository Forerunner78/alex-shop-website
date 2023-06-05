import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: 'Alex Shop',
  description: 'Alex Shop - MERN application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
