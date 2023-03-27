import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  product_id: number = 0
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private serviceProduct: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.serviceProduct.read().subscribe(products => {
      this.products = products
    });
  }


  openDialog(id:number): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      width: '500px',
      data: { product_id: id }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.updateTable(); // atualiza a tabela quando o modal é fechado
    });
  }

  updateTable(): void {
    this.serviceProduct.read().subscribe(products => {
      this.products = products;
    });
  }
}
