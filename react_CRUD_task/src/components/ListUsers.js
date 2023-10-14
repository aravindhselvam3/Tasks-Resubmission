import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://react-backend-54zc.onrender.com/users/').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>List Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/profile/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
