// const { } = require("react");
import React ,{createContext ,useState, Children,useReducer} from "react"

import AppReducer from "../reducer"

const initialState=
   {
       counter:0,
    //    list: [ { accepts: [ItemTypes.PAPER], lastDroppedItem: null,value:"Bottle" }],
       result:[{Ans1:"bottle",Ans2:"paper",Ans3:"MagaZine"}],
       

   }





export const GlobalContext=createContext(initialState)

// const  globalContextProvider=({children})=> {
//     const [state,dispatch] =useReducer(AppReducer,initialState);

     
//         // Add New Transaction Action
//         function addTransaction(ans) {
//             dispatch({
//                 type: 'ADD_RESULT',
//                 payload: ans
//             })
//         }

//         function addCounter() {
//             dispatch({
//                 type: 'COUNTER',
             
//             })
//         }

//     return (
//        <GlobalContext.Provider value={
         
//            {data:state.list,
//             selectedOptions:state.result,
//             addTransaction,
//               addCounter}
           
//        }>
//         {children}
//        </GlobalContext.Provider>
//     )
// }

// export default globalContextProvider
export default  ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

 
    
     
            // Add New Transaction Action
            function addTransaction(ans) {
                dispatch({
                    type: 'ADD_RESULT',
                    payload: ans
                })
            }
    
            function addCounter() {
                dispatch({
                    type: 'COUNTER',
                 
                })
            }

    return (
        <GlobalContext.Provider   value={
         
                       {
                        selectedOptions:state.result,
                        addTransaction,
                          addCounter}
                       
                   } >
            {children}
        </GlobalContext.Provider>
    );

}
