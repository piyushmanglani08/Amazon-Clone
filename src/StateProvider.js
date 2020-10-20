import React, {createContext, useContext, useReducer} from "react";

//PRepares the DataLayer
export const StateContext = createContext();

//wrap our app provide data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from data Layer
export const useStateValue = () => useContext(StateContext);