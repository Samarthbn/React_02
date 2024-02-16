import { createContext, useReducer, useState } from "react";

export const EmployeeContext= createContext({
    data: [],
    onSaveEmpData: () => {}
})

function empReducer(state,action){
    const updatedEmpData = [...state]

    if( action.type === 'ADD_EMPLOYEE'){
        const empData= {
            ...action.payload,
            id: Math.random.toString()
        }

        updatedEmpData.push(empData)
    }
    return updatedEmpData;
}

export default function EmployeeContextProvider({children}) {

    const employees= [
        {id: "e1", name: "Samarth Bn", DOB: new Date(2001, 12, 21), exp: '2'},
        {id: "e2", name: "Sinchana Bs", DOB: new Date(1999, 9, 5), exp: '4'},
        {id: "e3", name: "Akash Hr", DOB: new Date(2000, 5, 20), exp: '5'},
      ]

    const [emps, dispatch] = useReducer(empReducer, employees);
    
    const addEmpDataHandler= (data) =>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload: data
            }
        )
    }

    const contextValue= {
        data: emps,
        onSaveEmpData: addEmpDataHandler
    }

    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}