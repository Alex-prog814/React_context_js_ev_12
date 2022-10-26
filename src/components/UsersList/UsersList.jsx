import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersContext } from '../../userContext';

const UsersList = () => {
    const { getUsers, users, deleteUser } = useContext(usersContext);

    useEffect(() => {
        getUsers();
    }, []);

    const navigate = useNavigate();

  return (
    <div>
        <h2>Users List</h2>

        {users.map(item => (
            <div style={{ marginBottom: "30px" }} key={item.id}>
                Name: {item.name}; LastName: {item.lastName}; Age: {item.age}
                <button onClick={() => deleteUser(item.id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
                <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
            </div>
        ))}
    </div>
  )
}

export default UsersList