import React, { useState, useReducer } from 'react';

export const counterContext = React.createContext();

const INIT_STATE = {
    counter: 0,
    counter2: 0
};

function reducer(state=INIT_STATE, action){
    switch(action.type){
        case 'INCREMENT':
            return { ...state, counter: action.payload };
        case 'DECREMENT': 
            return { ...state, counter: action.payload };
        case 'INCREMENT10':
            return { ...state, counter2: action.payload };
        case 'DECREMENT10':
            return { ...state, counter2: action.payload };
        default:
            return state;
    };
};

const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    function increment(){
        dispatch({
            type: 'INCREMENT',
            payload: state.counter + 1
        });
    };

    function decrement(){
        dispatch({
            type: 'DECREMENT',
            payload: state.counter - 1
        });
    };

    function increment10(){
        dispatch({
            type: 'INCREMENT10',
            payload: state.counter2 + 10
        });
    };

    function decrement10(){
        dispatch({
            type: 'DECREMENT10',
            payload: state.counter2 - 10
        });
    };

    return (
        <counterContext.Provider value={{
            counter: state.counter,
            counter2: state.counter2,

            increment,
            decrement,
            increment10,
            decrement10
        }}>
            { children }
        </counterContext.Provider>
    )
};

export default CounterContextProvider;