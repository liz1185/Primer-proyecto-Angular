import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products= [
  {id:1, description:"Conjunto Ana", Talle: 85, price:1200},
  {id:2, description:"Conjunto Coral", Talle: 85, price:1200},
  {id:3, description:"Conjunto Franchesca", Talle: 85, price:1200},
  {id:4, description:"Conjunto Isa", Talle: 85, price:1200},
  {id:5, description:"Conjunto Meli", Talle: 85, price:1200},
  {id:6, description:"Conjunto Teens", Talle: 85, price:1200},

  ]

}
