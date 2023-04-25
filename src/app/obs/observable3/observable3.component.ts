import { Component, Output } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component {
  
  data: any = null;
  value: string = '';
  constructor(
    private obsService: ObsService
  ) { 
    this.obsService.getSubject().subscribe((myObject)=>{
      this.data = myObject;
    })
  }
  component3(){
    this.obsService.setObservable('componente 3....');
  }

  childFather(value: string){
    console.log("🚀 ~ file: observable3.component.ts:24 ~ Observable3Component ~ childFather ~ value:", value)
    this.value = value;
  }

}
