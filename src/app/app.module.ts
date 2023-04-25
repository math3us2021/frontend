import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { NavComponent } from './component/template/nav/nav.component';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import { ProductRead2Component } from './component/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { ObservableComponent } from './obs/observable/observable.component';
import { Observable2Component } from './obs/observable2/observable2.component';
import { Observable3Component } from './obs/observable3/observable3.component';
import { Child1Component } from './obs/observable/child1/child1.component';
import { Child2Component } from './obs/observable2/child2/child2.component';
import { Child3Component } from './obs/observable3/child3/child3.component';
import { RxjsComponent } from './obs/rxjs/rxjs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorControlComponent } from './obs/observable/error-control/error-control.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { ChildComponent } from './ngrx/child/child.component';
import { EffectsModule } from '@ngrx/effects';
import { NgrxService } from './ngrx/ngrx.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoComponentComponent } from './ngrx/todo-component/todo-component.component';
import { TodosService } from './store/todos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ObservableComponent,
    Observable2Component,
    Observable3Component,
    Child1Component,
    Child2Component,
    Child3Component,
    RxjsComponent,
    ErrorControlComponent,
    NgrxComponent,
    ChildComponent,
    TodoComponentComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    StoreModule.forRoot({
      app: appReducer
    }, {}),
    EffectsModule.forRoot([ TodosService ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
