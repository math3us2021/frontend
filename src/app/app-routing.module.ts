import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { TodoComponentComponent } from './ngrx/todo-component/todo-component.component';
import { NgrxComponent } from './ngrx/ngrx.component';

const routes: Routes = [ 
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "todos",
    component: TodoComponentComponent
  },
  {
    path: "ngrx",
    component: NgrxComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
