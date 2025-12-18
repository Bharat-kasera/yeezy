'use server'
import WooCommerceRestApi from 'woocommerce-rest-ts-api'

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WC_URL || 'https://testingwebprodigies.ue1.rapydapps.cloud/',
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: 'wc/v3',
})

export const getProducts = async () => {
  try {
    if (!process.env.WC_CONSUMER_KEY || !process.env.WC_CONSUMER_SECRET) {
      console.error('❌ WooCommerce API keys not configured! Check your .env file.')
      return []
    }
    const products = await WooCommerce.get('products')
    if (!Array.isArray(products.data)) {
      console.error('❌ WooCommerce API returned unexpected data:', products.data)
      return []
    }
    return products.data
  } catch (error) {
    console.error('❌ WooCommerce API Error:', error)
    return []
  }
}

export const getProduct = async (id: string) => {
  try {
    const product = await WooCommerce.get(`products`, {
      id: parseInt(id),
    })
    return product.data
  } catch (error) {
    console.error('❌ WooCommerce Product API Error:', error)
    return null
  }
}
