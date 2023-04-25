import { Component } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component {

  father: string = "Pai para filho...2";
  data: any = null;
  constructor(
    private obsService: ObsService
  ) { 
    this.obsService.getSubject().subscribe((myObject)=>{
      this.data = myObject;
    })
  }

  componente2() {
    this.obsService.setObservable('componente 2....');
  }

  childFather(value: string){
    console.log("🚀 ~ file: child2.component.ts:24 ~ Child2Component ~ childFather ~ value:", value)
  }
}
