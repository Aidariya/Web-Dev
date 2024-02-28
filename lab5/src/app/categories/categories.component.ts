import { Component } from '@angular/core';
import {categories} from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class ViewCategoriesComponent {
  categories = categories;
}