import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// create initial state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//create Global provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
function DeleteTransaction(id){
    dispatch({
        type: 'Delete_Transaction',
        payload: id
    })
}

function AddTransaction(transaction){
    dispatch({
        type: 'Add_Transaction',
        payload: transaction
    })
}

    return (<GlobalContext.Provider value= {{
        transactions: state.transactions,
        DeleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
