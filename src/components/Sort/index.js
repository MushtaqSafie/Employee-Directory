import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import "./style.css";

function Sort(props) {
  return ( 
    <form className="form-inline" style={{margin: "10px"}}>
      <label>Sort by: </label>
      <select name="filter-field" aria-controls="table" onChange={props.handleSortChange}>
          <option value="">Select Sort Field</option>
          <option value="name">Name</option>
          <option value="dob">Date of Birth</option>
          <option value="email">Email</option>
          <option value="phone">Contact number</option>
          <option value="registered">Registered Date</option>
      </select>
      <button className={"order-btn "+ (props.sortOrder === 1 ? 'activeBtn' : 'inactiveBtn')} onClick={props.handleSortOrder} ><RiArrowUpDownFill /> {(props.sortOrder === 1 ? 'Ascending' : 'Descending')}</button>
    </form>

  );
}

export default Sort;


