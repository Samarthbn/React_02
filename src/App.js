import './App.css';
import EmpDet from './Employe/emp-det';
import NewEmpData from './Employe/new-empdata';
import { useState, useEffect} from 'react';
import EmpForm from './Employe/emp-form';
import EmployeeContextProvider from './Employe/employee-context';
import { EmployeeContext } from './Employe/employee-context';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmpData } from './store';


function App() {

  const data=  useSelector(state => state.data);
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(sendEmpData(data))
  } ,[data,dispatch])

  return (
      <EmployeeContextProvider>
        <div>
          <h1 className='heading'> MY EMPLOYEE DETAILS </h1>  
          <NewEmpData>
            <EmpForm> </EmpForm>
          </NewEmpData>
          <EmpDet></EmpDet>
        </div>
      </EmployeeContextProvider>
      );
}

export default App;
