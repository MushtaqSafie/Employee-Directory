import React from "react";
// import "./style.css";

function TableHead() {
  return ( 
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">DOB</th>
        <th scope="col">Email</th>
        <th scope="col">Contact Number</th>
        <th scope="col">Registered Date</th>
      </tr>
    </thead>
  );
}

export default TableHead;
