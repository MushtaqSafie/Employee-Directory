import React from "react";
import "./style.css";

function Header(props) {
  return ( 
    <form className="form-inline" onSubmit={props.handleFormSubmit}>
      <label>Filter by</label>
      <select name="filter-field" aria-controls="table" onChange={props.handleFilterChange}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Contact number</option>
      </select>

      <label>include:</label>
      <input 
        onChange={props.handleFilterValue}
        name="filter"
        type="text"
        placeholder="search for value... "
        id="search"
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>

  );
}

export default Header;


