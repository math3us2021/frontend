import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit{

  products: Product[] | undefined
  
  constructor(private serviceProduct: ProductService){

  }

  ngOnInit(): void{
    this.serviceProduct.read().subscribe( products=> {
      this.products = products
      console.log("🚀 ~ file: product-read.component.ts:21 ~ ProductReadComponent ~ this.serviceProduct.read ~ products:", products)
      
    })
  }
}
