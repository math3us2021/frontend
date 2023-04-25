import { Component } from '@angular/core';
import { from, of, interval, take, range, fromEvent, defer} from 'rxjs';
///defer... só executa quando alguém se inscrever no observable, pode incluir uma função que retorna um observable

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  of = of(1,2,3,true,'string'); //emite os valores na ordem em que são passados
  from = from([1,2,3,'teste',true]); //pode receber estruturas de dados iteráveis, como arrays, strings, maps, sets, etc.E converte em um observable
  range$ = range(10,5)//emite uma sequência de valores numéricos em um intervalo especificado
  defender$ = defer(() => { /// só executa quando alguém se inscrever no observable, pode incluir uma função que retorna um observable.if ternário
    console.log('defer');
    return of('defer');
  });
  interval$ = interval(1000).pipe( //emite valores sequencialmente a cada intervalo de tempo especificado
    take(10)
  );

  constructor() { }

  ngOnInit(){

    // this.of.subscribe((data) => {
    //   console.log(data);
    // })

    // this.from.subscribe(
    //   (data) => {
    //     console.log(data);
    //   })

    // this.interval$.subscribe((data) => {
    //   console.log(data);
    // })

    // this.range$.subscribe((data) => {
    //   console.log("🚀 ~ file: rxjs.component.ts:33 ~ RxjsComponent ~ range$.subscribe ~ data:", data)
    // })

    // this.defender$.subscribe((data) => {
    //   console.log("🚀 ~ file: rxjs.component.ts:35 ~ RxjsComponent ~ this.defender$.subscribe ~ data:", data)
    // })
  }

  fromEvent(){
    const click$ = fromEvent(document, 'click');
    click$.subscribe((data) => {
      console.log("🚀 ~ file: rxjs.component.ts:43 ~ RxjsComponent ~ click$.subscribe ~ data:", data)
    })
  }

}
