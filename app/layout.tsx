import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eCommerce App',
  description: 'A modern eCommerce application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-primary">eCommerce</Link>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-primary">Products</Link>
                </li>
                <li>
                  <Link href="/cart" className="text-gray-600 hover:text-primary flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-1" />
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-12">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-600">&copy; 2023 eCommerce App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}