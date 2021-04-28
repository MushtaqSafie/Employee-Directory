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
    switch (props.sortField) {
      case "name":
        elements.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case "email":
        elements.sort((a, b) => (a.email > b.email) ? 1 : -1);
        break;
      case "phone":
        elements.sort((a, b) => (a.phone > b.phone) ? 1 : -1);
        break;
      case "dob":
        elements.sort((a, b) => (a.dob > b.dob) ? 1 : -1);
        break;
      case "registered":
        elements.sort((a, b) => (a.registeredDate > b.registeredDate) ? 1 : -1);
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
