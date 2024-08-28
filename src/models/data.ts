export type Products = Product[]

export interface ProductProps {
  id: string
  title: string
  description: string
  descriptionHtml: string
  availableForSale: boolean
  handle: string
  productType: string
  tags: string[]
  vendor: string
  priceRange: PriceRange
  compareAtPriceRange: CompareAtPriceRange
  images: Image[]
  options: Option[]
  requiresSellingPlan: boolean
  onlineStoreUrl: string
  media: Medum[]
  variants: Variant[]
  metafields: any[]
  collections: string[]
}

export interface PriceRange {
  maxVariantPrice: MaxVariantPrice
  minVariantPrice: MinVariantPrice
}

export interface MaxVariantPrice {
  amount: string
  currencyCode: string
}

export interface MinVariantPrice {
  amount: string
  currencyCode: string
}

export interface CompareAtPriceRange {
  maxVariantPrice: MaxVariantPrice2
  minVariantPrice: MinVariantPrice2
}

export interface MaxVariantPrice2 {
  amount: string
  currencyCode: string
}

export interface MinVariantPrice2 {
  amount: string
  currencyCode: string
}

export interface Image {
  id: string
  url: string
}

export interface Option {
  id: string
  name: string
  values: string[]
}

export interface Medum {
  mediaContentType: string
  image: Image2
}

export interface Image2 {
  url: string
  id: string
  altText: any
  width: number
  height: number
}

export interface Variant {
  id: string
  title: string
  quantityAvailable: number
  availableForSale: boolean
  currentlyNotInStock: boolean
  price: Price
  compareAtPrice?: CompareAtPrice
  sku: string
  selectedOptions: SelectedOption[]
  image: Image3
  product: Product
}

export interface Price {
  amount: string
  currencyCode: string
}

export interface CompareAtPrice {
  amount: string
  currencyCode: string
}

export interface SelectedOption {
  name: string
  value: string
}

export interface Image3 {
  id: string
  url: string
}

export interface Product {
  id: string
  handle: string
  options: Option2[]
}

export interface Option2 {
  id: string
  name: string
  values: string[]
}
