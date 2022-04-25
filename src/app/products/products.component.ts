import { Component, OnInit } from '@angular/core';
import {ProductsSvc} from 'src/ProductsSvc'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data = []

  constructor() { }

  ngOnInit(): void {
   
  }

}
