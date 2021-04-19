import { useEffect, useState } from 'react';
import API from "./utils/API"
import Table from "./components/Table"
import './App.css';

function App() {
  const [employeeState, setEmployeeState] = useState({

  });

  useEffect(() => {
    API.getEmployees(20).then((res) => {
      console.log(res);
    })
  }, []);

  return (
    <div className="container">
      <br></br>
      <div className="card" >
        <h1>Helo</h1>
        <Table />
      </div>
      
    </div>
  );
}

export default App;
