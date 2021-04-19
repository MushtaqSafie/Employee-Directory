import { useEffect, useState } from 'react';
import API from "./utils/API"
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
    <div className="App">
      <header className="App-header">
        <p>
          Employee Directory
        </p>
      </header>
    </div>
  );
}

export default App;
