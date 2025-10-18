import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
@Injectable({
      providedIn: 'root'
    })
    
export class App implements OnInit{
  public todos: any[] = []; // Array to store fetched data
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Example API URL

  constructor(private http: HttpClient) { }

  protected readonly title = signal('Angular');

  ngOnInit(): void {
        this.http.get<any[]>(this.apiUrl).subscribe(data => {
          this.todos = data; // Assign fetched data to the posts array
        });
      }

  public myClickHandler() {
      alert("Button Clicked");
    }
}
