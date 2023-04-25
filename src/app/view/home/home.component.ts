import { Component } from '@angular/core';
import { HeaderService } from 'src/app/component/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon:'storefront' ,
      routeUrl: '/products'
    }
  }
}
