import React, { useState } from "react";

export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
    estado: false
}

export const globalTeste = false;

export const modificaGlobalTeste = () =>    {
    globalTeste == false ? true : false;
}

export function reducer(state: { number: number, estado: boolean }, action: { type: any; }) {

    switch(action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number + 2}

        case 'retira-1-ToNmer':
            return {...state, number: state.number - 1}
        
        case 'openModalAddItem':
            return {...state, estado: state.estado == false ? true : false } //

        case 'mudaNumero++':
            return {...state, number: state.number++} 
        
        case 'modifica':
            return {...state, number: 1830}     

        default: 
                return state
    }
}



 const DataContext = React.createContext(initialState);
 export default DataContext;
