import React from "react";
import "./style.css";

function Header(props) {
  return ( 
    <form className="form-inline" onSubmit={props.handleFormSubmit}>
      <label>Filter by</label>
      <select name="filter-field" aria-controls="table" onChange={props.handleFilterChange}>
          <option value="Name">Name</option>
          <option value="Email">Email</option>
          <option value="DOB">DOB</option>
          <option value="Contact-number">Contact number</option>
          <option value="Registere-date">Registered Date</option>
      </select>

      <label>include:</label>
      <input 
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


