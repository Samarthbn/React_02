import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const employees= [
    {id: "e1", name: "Samarth bn", DOB: new Date(2001, 12, 21), exp: '2'},
    {id: "e2", name: "Sinchana bs", DOB: new Date(1999, 9, 5), exp: '4'},
    {id: "e3", name: "Akash HR", DOB: new Date(2000, 5, 20), exp: '5'},

  ]

  const initialState= { data: employees}

  const employeeSlice =  createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        addEmployee(state, action) {
            const empData= {
                ...action.payload,
                id: Math.random.toString()
            }
            
            state.data.push(empData);
        }
    }
  })

export const sendEmpData= (employeeData) => {
    return async (dispatch) => {
        const sendRequest= async () => {
            const response=  await fetch('https://emp-mgmt-b2ed4-default-rtdb.firebaseio.com/data.json', {
                method: 'PUT',
                body: JSON.stringify(employeeData)
            });

            if(!response.ok){
                throw new Error("Request Failed");
            }
        };

        try{
            await sendRequest();
        } catch(e){
            console.log(e)
        }
    }
}


const employeeStore= configureStore({
    reducer: employeeSlice.reducer
})
export default employeeStore
export const employeeActions= employeeSlice.actions;