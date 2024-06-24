import { useReducer } from "react"

type CounterStateType = {
    count: number
}


type CounterActionType = {
    type: string
    payload: number
}
const initialState = {
    count: 0,
};

function reducer(state: CounterStateType, action: CounterActionType){
    switch (action.type){
      case 'increment':
        return {count: state.count + action.payload}
      case 'decrement': 
        return {count: state.count - action.payload}
      default:
        return state
    }
}


export default function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 10})}> 
            Add 10 
        </button>

        <button onClick={() => dispatch({type: 'decrement', payload: 10})}> 
            Minus 10 
        </button>
    </div>
  )
}
