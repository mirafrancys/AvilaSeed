import { StringMappingType } from "typescript"

export interface OrderDto{
  orderId: number
  customerId: number
  orderNumber: string
  orderAmount: number
  orderType: number
  orderStatus: number
  paymentMethod: number
  transactionCode: string
  orderItem: OrderItemDto[]
}

export interface OrderItemDto{
  orderItemId: number
  productId: number
  quantity: number
  price: number
  productCode: string
  productName: string
  productThumbnail: string
}