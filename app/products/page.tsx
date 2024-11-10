import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const products = [
  { id: 1, title: 'Stylish Watch', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, title: 'Designer Sunglasses', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, title: 'Leather Wallet', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, title: 'Wireless Earbuds', price: 129.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, title: 'Smart Speaker', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, title: 'Fitness Tracker', price: 59.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 7, title: 'Portable Charger', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 8, title: 'Bluetooth Headphones', price: 99.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function ProductListing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.title}</CardTitle>
              <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/products/${product.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}