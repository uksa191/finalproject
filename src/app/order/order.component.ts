import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { OrderService } from '..//order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['..//app.component.css'],
}) 

export class OrderComponent implements OnInit {


form =this.fb.group({
  name: ['', Validators.required],
  phone: ['', Validators.required],
  mail: ['', Validators.required],
  car: ['', Validators.required],
  massage: ['', Validators.required]
})
  constructor(private order: OrderService,
              private fb: FormBuilder) { }

              get f() { return this.form.controls; }
  
  ngOnInit() {
   console.log(this.f)
  }


  onSubmit(){
    this.order.Orders.push(this.form.value);
    console.log(this.order);
    
    
  
 }
}
