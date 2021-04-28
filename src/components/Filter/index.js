import React from "react";
import { HiFilter } from "react-icons/hi";
import "./style.css";

function Filter(props) {
  return ( 
    <form className="form-inline" onSubmit={props.handleFilterSubmit} style={{margin: "10px"}}>
      <label><HiFilter/>Filter by</label>
      <select name="filter-field" className="col-sm-4 col-lg-2" aria-controls="table" onChange={props.handleFilterChange}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Contact number</option>
      </select>

      <label>include:</label>
      <input 
        onChange={props.handleFilterValue}
        name="filter"
        type="text"
        placeholder="search for... "
        id="search"
      />
      <button type="submit" className="btn btn-primary col-sm-4 col-md-4 col-lg-2">Search</button>
      <button type="button" className="btn btn-danger col-sm-4 col-md-4 col-lg-2" onClick={props.handleFilterReset}>Reset</button>
    </form>

  );
}

export default Filter;


