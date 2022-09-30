import React, { createContext, useEffect, useReducer } from 'react'

export const CardContext = createContext()

const Context = ({ children }) => {

    const initialTodos = {
        products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
        cartStore: localStorage.getItem("cartStore") ? JSON.parse(localStorage.getItem("cartStore")) : []
    };



    const reducer = (state, action) => {
        const { type, payload } = action
        switch (type) {
            case "SetAllProductData":
                return { ...state, products: payload };
            case "ADD_TO_CART":
                return { ...state, cartStore: [...state.cartStore, { ...payload, qty: 1 }] };
            case "REMOVE_TO_CART":
                return { ...state, cartStore: state.cartStore.filter((c) => c.id !== payload.id) };
            case "CHANGE_QTY":
                return { ...state, cartStore: state.cartStore.filter((c) => c.id === payload.id ? (c.qty = payload.qty) : c.qty) }
            default:
                return state;
        }
    };


    const apiFetch = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch({ type: "SetAllProductData", payload: data });
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        apiFetch();
    }, [])

    const [state, dispatch] = useReducer(reducer, initialTodos);

    //  local storage  
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(state.products))
        localStorage.setItem("cartStore", JSON.stringify(state.cartStore))
    }, [state])

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}

export default Context