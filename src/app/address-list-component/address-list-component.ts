import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common'
import { AddressComponent } from '../address-component/address-component';
export class Address {
  street: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
}

@Component({
  selector: 'address-list',
  imports: [NgFor, AddressComponent],
  templateUrl: './address-list-component.html',
  styleUrl: './address-list-component.scss'
})
export class AddressListComponent {
@Input() addresses: Address[] | undefined;
  constructor() { }
}
