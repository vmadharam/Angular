import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpperCasePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first-component/first-component'
import { ShoppingList } from './shopping-list/shopping-list'
import { AddressListComponent } from './address-list-component/address-list-component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe,CommonModule, FormsModule, 
    FirstComponent,ShoppingList,AddressListComponent,TemperatureConverterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
@Injectable({
      providedIn: 'root'
    })
    
export class App implements OnInit{

  addresses = [
    { street: "Third Avenue", city: "New York", zipCode: "10001" },
    { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }
  ];
  shoppingItems = ["Bread", "Eggs", "Milk"];
  firstName = 'Venu';
  lastName = signal('Madharam')

  public todos: any[] = []; // Array to store fetched data
  public comments: any[] = []; // Array to store fetched data
  private todosApiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Example API URL
  private commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments'; // Example API URL
  constructor(private http: HttpClient) { }

  protected readonly title = signal('Angular');

  ngOnInit(): void {
        this.http.get<any[]>(this.todosApiUrl).subscribe(data => {
          this.todos = data; // Assign fetched data to the posts array
        });
        this.http.get<any[]>(this.commentsApiUrl).subscribe(data => {
          this.comments = data; // Assign fetched data to the posts array
        });
      }

  public myClickHandler() {
      alert("Button Clicked");
    }

  count = signal(0);

  isEven = computed(() => this.count() % 2 === 0);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}