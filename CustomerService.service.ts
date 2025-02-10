import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = "http://localhost:8080";

  public registerCustomer(CustomerData: any) {
    return this.http.post(`${this.API}/customer`, CustomerData);
  }

  public getCustomer() {
    return this.http.get(`${this.API}/customer`);
  }

  public deleteCustomer(CustomerId: any) {
    return this.http.delete(`${this.API}/customer/${CustomerId}`);
  }

  public updateCustomer(Customer: any) {
    return this.http.put(`${this.API}/customer/${Customer.id}`, Customer);
  }

  constructor(private http: HttpClient) { }
}
