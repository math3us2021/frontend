import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  @Output() value = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void {
    this.value.emit('Filho para pai....3');
  }
}
