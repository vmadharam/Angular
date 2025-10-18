import { Component, Input } from '@angular/core';
export class Address {
  street: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
}
@Component({
  selector: 'address',
  imports: [],
  templateUrl: './address-component.html',
  styleUrl: './address-component.scss'
})
export class AddressComponent {
@Input() address: Address | undefined;
  constructor() { }
}
