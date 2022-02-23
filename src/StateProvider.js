//Setting up data layer.
import { createContext, useContext, useReducer } from "react";

//THIS IS DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER(WILL WRAP ALL THE APP WITH THIS PROVIDER)

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );                                            
};

//THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext);
