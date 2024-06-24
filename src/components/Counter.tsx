import { useReducer } from "react"

type CounterStateType = {
    count: number
}

type UpdateCounterAction = {
    type: 'increment' | 'decrement' 
    payload: number
}

type ResetCounterAction = {
    type: 'reset'
}

type CounterActionType = UpdateCounterAction | ResetCounterAction ;
const initialState = {
    count: 0,
};



function reducer(state: CounterStateType, action: CounterActionType){
    switch (action.type){
      case 'increment':
        return {count: state.count + action.payload}
      case 'decrement': 
        return {count: state.count - action.payload}
      case 'reset':
        return initialState
      default:
        return state
    }
}


export default function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>Count Value is : {state.count}</h1>
        <button onClick={() => dispatch({type: 'increment', payload: 10})}> 
            Add 10 
        </button> <br />

        <button onClick={() => dispatch({type: 'decrement', payload: 10})}> 
            Minus 10 
        </button> <br />

        <button onClick={() => dispatch({type: 'reset'})}> 
          Reset  
        </button>
    </div>
  )
}
