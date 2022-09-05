import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

export const alertContext = createContext();

const AlertContextProvider = ({children}) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

//   set alert
const setAlert=(msg,type)=>{
    dispatch({
        type:'SET_ALERT',
        payload:{msg,type}
    })
    setTimeout(()=>dispatch({
        type:'REMOVE_ALERT'
    }),3000)
}
  return(
  <alertContext.Provider value={{alert:state,setAlert}}>
    {children}
  </alertContext.Provider>)
};

export default AlertContextProvider;
