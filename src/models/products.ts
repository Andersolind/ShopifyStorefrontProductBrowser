import { CompareAtPriceRange, Image, Medum, Option, PriceRange, ProductProps, Variant } from "./data"

export interface ProductsProps {
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
  export interface Item {
    item: ProductProps
  }
  