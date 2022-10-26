import React, { useContext, useState } from 'react';
import { usersContext } from '../../userContext';

const AddForm = () => {
    const { addUser } = useContext(usersContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    function createUser(){
        if(!name || !lastName || !age){
            alert('Some inputs are empty!');
            return;
        };

        let newUser = {
            name,
            lastName,
            age
        };

        addUser(newUser);

        setName('');
        setLastName('');
        setAge('');
    };

  return (
    <div>
        <h2>Create User</h2>

        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />

        <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

        <button onClick={createUser}>Register</button>
    </div>
  )
}

export default AddForm