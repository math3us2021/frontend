import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadTodos } from 'src/app/store/action';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent {
  todos$ = this.store.select('app').pipe(
    map((state) => state.todos)
  );

  constructor(
    private store: Store<{app : IAppState}>
  ) { }
  
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }


}
