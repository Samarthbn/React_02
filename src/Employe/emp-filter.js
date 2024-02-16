import './emp-filter.css'
function EmpFilter(props){

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return(
            <div className="filter-holder">
                <label> Filter by Exp</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='6'> 6</option>
                    <option value='5'> 5</option>
                    <option value='4'> 4</option>
                    <option value='3'> 3</option>
                    <option value='2'> 2</option>
                    <option value='1'> 1</option>
                    
                </select>
            </div>
    )

}

export default EmpFilter;