import React from "react";
import "./style.css";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

function Table(props) {
  return ( 
    <table className="table  table-striped">
      <TableHead />
      <TableBody userData={props.userData} />
    </table>
  );
}

export default Table;
