import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input() value: string = "";
  @Output('teste') value2 = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.value2.emit('Filho para pai....2');
  }
}
