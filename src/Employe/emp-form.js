import './emp-form.css'
import React, {useState} from 'react';
import { useContext } from 'react';
import { EmployeeContext } from './employee-context';
import {useDispatch} from 'react-redux'
import { employeeActions } from '../store';

const EmpForm= (props) => {

    const dispatch = useDispatch();

    let [inputName, setInputName]= useState('');
    let [inputExp, setInputExp]= useState('');
    let [inputDate, setInputDate]= useState('');

    const nameChangeHandler =(event) =>{
        setInputName(event.target.value);
    }

    const expChangeHandler =(event) =>{
        setInputExp(event.target.value);
    }

    const dateChangeHandler =(event) =>{
        setInputDate(event.target.value);
    }

    const submitHandler= (event) =>{
        event.preventDefault() 

        const newEmpData={
            name: inputName,
            DOB: new Date(inputDate),
            exp: inputExp,
        };

        dispatch(employeeActions.addEmployee(newEmpData))

        setInputName('')
        setInputExp('')
        setInputDate('')
    };
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="emp-form">
                <div className="emp-name">
                    <label> Name: </label>
                    <input type='text' onChange={nameChangeHandler} value={inputName}></input>
                </div>
                <div className="emp-exp">
                    <label> Experience: </label>
                    <input type='number' onChange={expChangeHandler} value={inputExp}></input>
                </div>
                </div>
                <div className="emp-date">
                    <label> Date: </label>
                    <input type='date' min=" 2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={inputDate}></input>
                </div>
                <div className="emp-submit-button">
                    <button type='submit'> Add Employee</button>
                </div>
            </form>
        </div>
    )
}

export default EmpForm;