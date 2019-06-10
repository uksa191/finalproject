export class OrderService {
  Orders: Array<{name : string, phone: number, mail: string, car: string, massage: string}> =[];
  set(Orders: Array<{name : string, phone: number, mail: string, car: string, massage: string}>){
    localStorage.setItem('order',JSON.stringify(this.Orders));
  }
  get(Orders: Array<{name : string, phone: number, mail: string, car: string, massage: string}>){
    return this.Orders = JSON.parse(localStorage.getItem('order'));
  }
}
