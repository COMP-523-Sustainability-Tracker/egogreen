export interface Receipt {
    id: string
    merchantName: string
    merchantAddress: string
    merchantCity: string
    merchantState: string
    date: string
    paymentType: string
    taxAmount: number
    receiptTotal: number
    calculatedSubTotal: number
    totalGCO2e: number
  }