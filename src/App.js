import { useEffect, useState } from 'react';
import API from "./utils/API"
import Table from "./components/Table"
import Header from "./components/Header"
import './App.css';


function App() {
  const [initUsers, setInitUsers] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [filterField, setFilterField] = useState("Name")
  const [filterValue, setFilter] = useState("");

  useEffect(() => {
    API.getEmployees(20).then((res) => {   
      setInitUsers(res.data.results);
      setUsers(res.data.results);
    })
  }, []);

  const handleFilterChange = (event) => {
    // const name = event.target.name;
    const value = event.target.value;
    console.log("value", value);
    setFilter(value)

    const newUser = initUsers.filter((items) => {
      return items.name.first.includes(filterValue)
    });
    setUsers(newUser);

    console.log(users);


    // users.forEach(item => {
    //   console.log(item);
    //   item.name.first = "mushtaq";
    //   item.name.last = "safie";
    //   newUser.push(item);
    // });
 
    // console.log(users);
    // const result = users.filter(name => name.)
    // setUsers([])
  };
  
  // When the form is submitted, search the Giphy API for `this.state.search`
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("helo");
    // this.searchGiphy(this.state.search);
  };
  

  return (
    <div className="container" style={{padding: "15px"}}>
      <div className="card" >
        <Header 
          handleFormSubmit={handleFormSubmit}
          handleFilterChange={handleFilterChange}
        />
        <Table userData={users} />
      </div>
      
    </div>
  );
}

export default App;
