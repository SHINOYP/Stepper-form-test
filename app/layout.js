import Navbar from './componets/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { FormProvider } from "../context/course.context";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>
        <Navbar/>
        {children}
        </FormProvider>
        </body>
        
    </html>
  )
}