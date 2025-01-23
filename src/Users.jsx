import { useState } from "react";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Tamil", email: "tamil@mail.com" },
    { id: 2, name: "Hello", email: "hello@mail.com" },
    { id: 3, name: "Vikki", email: "vikki@mail.com" },
  ]);

  const addUser = () => {
    setUsers([
      ...users,
      { id: Date.now(), name: "Raja", email: "raja@mail.com" },
    ]);
  };

  return(
    <> 
      { users.map((item)=>(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h6>{item.email} - {item.id}</h6>
        </div>
      ))}

      <Button title="Add User" addUser={addUser}/>
    </>
  )
};

export default Users;
