import { createReducer, on } from "@ngrx/store";
import { decrementaContador, defineContador, incrementaContador, setTodos, sucessoTodos } from "./action";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IAppState { /// definira interface para o estado da aplicação
    counter: number;
    todos: ITodo[];
}

export const INITIAL_STATE: IAppState = { // define o estado inicial da aplicação
    counter: 5,
    todos: []
}

export const appReducer = createReducer(
    INITIAL_STATE, /// valor inicial do estado
    ///posso definir a ação para cada action que chegar ( q eu criar)
    on(
        incrementaContador, (state) => ({ ...state, counter: state.counter + 1 }) ///posso definir a ação para cada action que chegar ( q eu criar)
    ),
    on(decrementaContador, (state) => ({ ...state, counter: state.counter - 1 })
    ),
    on(defineContador, (state, {payload}) => ({ ...state, counter: payload })
    ),/// o 2° argumento representa o parametro que eu passei na action. atraves dele q tenho acesso ao valor do payload
    on(setTodos, (state, {payload}) => ({ ...state, todos: payload }) 
    ),
    on(sucessoTodos, (state) => ({ ...state, todos: state.todos }))
)
    

