import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IAppState, ITodo } from '../store/app.state';
import { of, switchMap, withLatestFrom, map, tap } from 'rxjs';
import { Store } from "@ngrx/store";
import { loadTodos, setTodos, sucessoTodos } from './action';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private actions$: Actions, // carrega todas as actions que são disparadas pelo redux
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) { }

  carregaTodos = createEffect(
    () => this.actions$.pipe( ///aerofunction retorna um observable de actions, trazer todas as actions que são disparadas pelo redux
      ofType(loadTodos), ///filtra as actions que eu quero tratar
      withLatestFrom(
        this.store.select('app').pipe(
          map(app => app.todos)
      )),
      switchMap(() =>//o switchMap cancela o observable anterior e retorna um novo
        this.http.get<ITodo>('https://jsonplaceholder.typicode.com/todos')
      ),
      tap(todos => this.store.dispatch(setTodos( { payload: todos }))),
      map(() => sucessoTodos())
    )
  )
}
