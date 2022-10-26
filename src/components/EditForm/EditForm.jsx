import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usersContext } from '../../userContext';

const EditForm = () => {
    const { getOneUser, oneUser, updateUser } = useContext(usersContext);

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getOneUser(id);
    }, []);

    useEffect(() => {
        if(oneUser){
            setName(oneUser.name);
            setLastName(oneUser.lastName);
            setAge(oneUser.age);
        };
    }, [oneUser]);

    function saveChanges(){
        if(!name || !lastName || !age){
            alert('Some inputs are empty!');
            return;
        };

        let editedUser = {
            name,
            lastName,
            age
        };

        updateUser(id, editedUser);
        navigate('/users');
    };

  return oneUser ? (
    <div>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />

        <input type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

        <button onClick={saveChanges}>Save Changes</button>
    </div>
  ) : (
      <h2>Loading...</h2>
  )
}

export default EditForm