import React,{ useReducer,createContext } from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
};


const initialState = {
    budget : 2000,
    expenses : [
        
        {id:1,name : 'Shopping',cost : 400},
        {id:2,name : 'Repaying the cartel',cost : 500},
        {id:3,name : 'Laksmi Chit Fund',cost : 1500}
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer , initialState);

    return(
        <AppContext.Provider
            value = {{
                budget : state.budget,
                expenses : state.expenses,
                dispatch,
            }}
            >
                {props.children}
            </AppContext.Provider>
        );
};
