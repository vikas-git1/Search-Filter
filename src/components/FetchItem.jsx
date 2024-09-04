import React, { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import "./FetchItem.css";
const FetchItem = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error Occcurd", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="fetch-item-container">
      <FilterItem users={users} />
    </div>
  );
};

export default FetchItem;

//           "https://jsonplaceholder.typicode.com/users"
