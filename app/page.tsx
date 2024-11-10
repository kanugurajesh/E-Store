import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const featuredProducts = [
  { id: 1, title: 'Stylish Watch', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, title: 'Designer Sunglasses', price: 149.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, title: 'Leather Wallet', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, title: 'Wireless Earbuds', price: 129.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">Discover amazing products at great prices!</p>
          <Link href="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image src={product.image} alt={product.title} width={200} height={200} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.title}</CardTitle>
                <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}