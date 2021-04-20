import React from "react";
import "./style.css";

function TableBody(props) {
  const elements = props.userData;

  const dateConverter = (date) => {
    const newDate = new Date(date);
    const yyyy = newDate.getFullYear();
    const mm = newDate.getMonth()+1;
    const dd = newDate.getDate();

    const result = `${yyyy}-${mm}-${dd}`;
    return result
  }

  return ( 
    <tbody>
      {elements.map((item, index) => (
        <tr key={index}>
          <th scope="row"><img className="avatar" src={item.picture.medium} alt="avatar" /></th>
          <td>{item.name.first} {item.name.last}</td>
          <td>{dateConverter(item.dob.date)}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{dateConverter(item.registered.date)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
