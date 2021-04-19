import React from "react";
// import "./style.css";

function TableBody(props) {
  const elements = props.userData;

  const tableRows = [];
  elements.forEach(value => {
    tableRows.push(
      <tr>
        <th scope="row"><img src={value.picture.medium}></img></th>
        <td>{value.name.first} {value.name.last}</td>
        <td>{value.dob.date}</td>
        <td>{value.email}</td>
        <td>{value.phone}</td>
        <td>{value.registered.date}</td>
      </tr>
    )
  });
  
  return ( 
    <tbody>
      {tableRows}
    </tbody>
  );
}

export default TableBody;
