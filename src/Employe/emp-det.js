import EmpData from "./emp-data";
import EmpFilter from "./emp-filter";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EmployeeContext } from "./employee-context";


function EmpDet(props){

    const data= useSelector(state => state.data)

    console.log(data)
    const [filteredExp, setFilteredExp]= useState('9')

    const filterChangeHandler = selectedExp => {
        setFilteredExp(selectedExp);
    }

    const filteredData = data.filter(data => {
        return data.exp === filteredExp;
    });

    console.log(filteredData)
    return(
        <div className="data-holder"> 
            <EmpFilter selected={filteredExp} onChangeFilter={filterChangeHandler}> </EmpFilter>
            {
            filteredData.map((empData) => (<EmpData key={empData.id} name={empData.name} exp={empData.exp +' Years'} DOB={empData.DOB}></EmpData>))
            }
        </div>
        
    )
}

export default EmpDet;