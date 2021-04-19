import React from "react";
import "./style.css";
import TableHead from "../TableHead";
import TableBody from "../TableBody";

function Table() {
  return ( 
    <table className="table table-dark table-striped">
      <TableHead />
      <TableBody />
    </table>
  );
}

export default Table;
