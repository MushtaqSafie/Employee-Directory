import React from "react";
import "./style.css";

function TableBody(props) {
  const elements = props.userData;

  const dateConverter = (date) => {
    const d = new Date(date);
    const result = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    return result
  }

  if (props.sortField) {
    console.log();
    switch (props.sortField) {
      case "name":
        elements.sort((a, b) => (a.name > b.name) ? props.sortOrder : -1*props.sortOrder);
        break;
      case "email":
        elements.sort((a, b) => (a.email > b.email) ? props.sortOrder : -1*props.sortOrder);
        break;
      case "phone":
        elements.sort((a, b) => (a.phone > b.phone) ? props.sortOrder : -1*props.sortOrder);
        break;
      case "dob":
        elements.sort((a, b) => (a.dob > b.dob) ? props.sortOrder : -1*props.sortOrder);
        break;
      case "registered":
        elements.sort((a, b) => (a.registeredDate > b.registeredDate) ? props.sortOrder : -1*props.sortOrder);
        break;
      default:
        break;
    }
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
