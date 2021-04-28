import { useEffect, useState } from 'react';
import API from "./utils/API"
import Table from "./components/Table"
import Filter from "./components/Filter"
import Sort from "./components/Sort"
import './App.css';


function App() {
  const [initUsers, setInitUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterField, setFilterField] = useState("name")
  const [filterValue, setFilterValue] = useState("");
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    API.getEmployees(20).then((res) => {   
      let data = res.data.results
      let result = [];
      data.forEach(item => {
        const obj = {
          name: item.name.first +" "+ item.name.last,
          email: item.email,
          dob: item.dob.date,
          phone: item.phone,
          picture: item.picture.medium,
          registeredDate: item.registered.date
        }
        result.push(obj);
      });
      setInitUsers(result);
      setUsers(result);
    })
  }, []);

  
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const value = filterValue.toLowerCase();
    // eslint-disable-next-line
    const newUser = initUsers.filter((items) => {
      switch (filterField) {
        case "name":
          let nameStr = items.name.toLowerCase();
          return nameStr.includes(value) 
        case "email":
          let emailStr = items.email.toLowerCase();
          return emailStr.includes(value)
        case "phone":
          let phoneStr = items.phone.toLowerCase();
          return phoneStr.includes(value)
        default:
          break;
      }
    });
    setUsers(newUser);
  };

  return (
    <div className="container" style={{padding: "15px"}}>
      <div className="card " >
        <div className="card-header">
        <Sort 
          handleSortChange={(e) => setSortField(e.target.value)}
          />
        <Filter 
          handleFilterSubmit={handleFilterSubmit}
          handleFilterChange={(e) => setFilterField(e.target.value)}
          handleFilterValue={(e) => setFilterValue(e.target.value)}
          handleFilterReset={() => setUsers(initUsers)}
          />
        </div>
        <Table userData={users} sortField={sortField} />
      </div>
      
    </div>
  );
}

export default App;
