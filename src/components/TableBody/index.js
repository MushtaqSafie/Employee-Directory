import React from "react";
import "./style.css";

function TableBody(props) {
  const elements = props.userData;

  const dateConverter = (date) => {
    const d = new Date(date);
    const result = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    return result
  }

  return ( 
    <tbody>
      {elements.map((item, index) => (
        <tr key={index}>
          <th scope="row"><img className="avatar" src={item.picture} alt="avatar" /></th>
          <td>{item.name}</td>
          <td>{dateConverter(item.dob)}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{dateConverter(item.registeredDate)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
