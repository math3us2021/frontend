import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../model/client';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @ViewChild('child') child!: ElementRef;
  @Input() father: string = "";
  @Output('child') value = new EventEmitter<string>();

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  createForm() {

    this.formulario = this.formBuilder.group({
      name: ['', Validators.required], // primeiro valor é o inicial, o segundo é o validador
      email: ['', [Validators.email, Validators.required]] //se for mais de um validador, passar um array
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formulario.value);

    // Usar o método reset para limpar os controles na tela
    this.formulario.reset();
  }

  ngOnInit(): void {
    this.createForm();

    // this.formulario = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.email]
    // })

    // this.formCliente = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email])
    // });


    // this.createForm(new Cliente());
    // this.value.emit('Filho para pai....1')
    // if(this.father === 'child1') {
    //   this.child.nativeElement.classList.add('child');
    // }
  }

  verifyValidTouched(campo: string): boolean | undefined {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  aplicCssErro(campo: string) {
    return {
      'is-invalid': this.verifyValidTouched(campo),
      // 'is-invalid-feedback': this.verifyValidTouched(campo)
    }
  }

  childFather(value: string) {
  }

}
