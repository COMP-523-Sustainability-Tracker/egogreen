export class Receipt {
    constructor
      (
        public id: string,
        public merchantName: string,
        public merchantAddress: string,
        public merchantCity: string,
        public merchantState: string,
        public date: string,
        public paymentType: string,
        public receiptTotal: number,
        public calculatedSubTotal: number,
        public totalGCO2e: number
      )
    {}   
}