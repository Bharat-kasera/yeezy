import { getProducts } from '@/actions/products'
import ProductGrid from '@/components/ProductGrid'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const products = await getProducts()
  return <ProductGrid products={products} />
}
