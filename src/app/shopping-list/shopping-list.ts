// Instructions to set up local environment for Angular project
// Create a new Angular project
// Replace the contents of app.component.ts with the following starting template:
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'shopping-list',
  imports: [NgFor],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss'
  })
export class ShoppingList {
  @Input() items: string[] = [];
}
