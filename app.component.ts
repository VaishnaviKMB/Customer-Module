import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from './CustomerService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customer-module';

  constructor(private customerService: CustomerService) {
    this.getCustomerDetails();
  }

  register(registerForm: NgForm) {
    this.customerService.registerCustomer(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getCustomerDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCustomerDetails() {
    this.customerService.getCustomer().subscribe(
      (resp) => {
        console.log(resp);
        this.CustomerDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  CustomerDetails = null as any;

  deleteCustomer(customer: any) {
    this.customerService.deleteCustomer(customer.id).subscribe(
      (resp) => {
        console.log(resp); 
        this.getCustomerDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  CustomerToUpdate = {
    id: null as any,
    name: "",
    ord_date: "",
    ord_id:null as any 
    // state: ""
  };

  edit(Customer: any) {
    this.CustomerToUpdate = { ...Customer };
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.CustomerToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getCustomerDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
