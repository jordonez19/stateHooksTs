
import { useReducer } from 'react'

const initialState = {
    contador: 0,
}
type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
            break;
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
            break;
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

    return (
        <>
            <h2>Contador: {contadorState.contador} </h2>
            <button
                onClick={() => dispatch({ type: 'incrementar' })}
                className='btn btn-primary mx-2'>
                +1
            </button>
            <button
                onClick={() => dispatch({ type: 'decrementar' })}
                className='btn btn-primary'>
                -1
            </button>
            <button
                onClick={() => dispatch({ type: 'custom', payload: 10 })}
                className='btn btn-danger mx-2'>
                10
            </button>
        </>
    )
}

export default ContadorRed
