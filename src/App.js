import { useEffect, useState } from 'react';
import API from "./utils/API"
import Table from "./components/Table"
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getEmployees(20).then((res) => {
      // console.log(res.data.results);
      setUsers(res.data.results)
    })
  }, []);

 
  return (
    <div className="container">
      <br></br>
      <div className="card" >
        <h1>Helo</h1>
        <Table userData={users} />
      </div>
      
    </div>
  );
}

export default App;
