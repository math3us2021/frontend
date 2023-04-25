import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.css']
})
export class ErrorControlComponent {

  @Input() showErrors: boolean | undefined  = false;
  @Input() msgError: string = "";
}
