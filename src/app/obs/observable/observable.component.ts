import { Observable } from 'rxjs';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})


export class ObservableComponent {
  @ViewChild ('data') dataClass!: ElementRef;
  value: string = '';
  changeValue: string = "Pai para filho"
  data: any = null;
  constructor(
    private obsService: ObsService
  ) {
    this.obsService.getSubject().subscribe((myObject) => {
      this.data = myObject;
    })
  }

  testSubscribe() {
  }


  ngOnInit(): void {
  }

  tesObservable() {
    this.obsService.setObservable('mudei em um... muda em todos, variável global');
    // this.dataClass.nativeElement.classList.add('data'); 
  }

  teste() {
    this.obsService.obser().subscribe((data) => {
      console.log(data);
    });
  }

  childFather(value: string) {
    console.log("🚀 ~ file: child2.component.ts:24 ~ Child2Component ~ childFather ~ value:", value)
    this.value = value;
  }
}
