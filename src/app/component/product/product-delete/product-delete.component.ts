import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit{
  product: Product = {
    name: "",
    price: null,
  }
  product_id: number = 0
  constructor(
    private productService: ProductService, 
    public dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      product_id: number
    }) {
      this.product_id = data.product_id
    }
    
  ngOnInit(): void {
    this.productService.readById(this.product_id).subscribe(product => {
      this.product = product
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleted(){
    this.productService.delete(this.product_id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso')
      this.dialogRef.close();
    })
  }

}
