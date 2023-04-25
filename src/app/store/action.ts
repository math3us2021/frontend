import { createAction, createReducer, on, props } from "@ngrx/store";


export const incrementaContador = createAction('INCREMENTA_CONTADOR')
export const decrementaContador = createAction('DECREMENTA_CONTADOR', /// nome da ação
)
export const defineContador = createAction('DEFINE_CONTADOR', /// nome da ação
props<{payload: number}>() ///props é utilizado para passar parametros para a action
)


export const setTodos = createAction('SET_TODOS',
    props<{ payload: any }>()
    )
export const loadTodos = createAction('LOAD_TODOS')
export const sucessoTodos = createAction('SUCESS_TODOS')