import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [CommonModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss'
})
export class FirstComponent implements OnInit{
  public photos: any[] = []; // Array to store fetched data
  private photosApiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any[]>(this.photosApiUrl).subscribe(data => {
          this.photos = data; // Assign fetched data to the posts array
        });
  }

}
