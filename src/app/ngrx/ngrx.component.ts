import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/app.state';
import { map } from 'rxjs';
import { incrementaContador } from '../store/action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent {

  counter$ = this.store.select('app').pipe(
    map((state) => state.counter)
  );
  // counter$ = this.store.select(state => state.counter);

  constructor(
    private store: Store<{app : IAppState}>
  ) { }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch(incrementaContador())
  }
  decrement(){
    this.store.dispatch({type: 'DECREMENTA_CONTADOR'})
  }

  definirContador(value: string){
  const valueTrated = parseFloat(value);
  this.store.dispatch({type: 'DEFINE_CONTADOR', payload: valueTrated})
  }
}
