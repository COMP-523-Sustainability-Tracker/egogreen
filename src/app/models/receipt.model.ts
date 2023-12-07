import { LineItem } from "./line-item.model"

export class Receipt {
  public id: string
  public merchantName: string
  public merchantAddress: string
  public merchantCity: string
  public merchantState: string
  public date: string
  public paymentType: string
  public receiptTotal: number
  public calculatedSubTotal: number
  public totalGCO2e: number
  public taxAmount: number
  public imageURL: string
  public lineItems: LineItem[];
}