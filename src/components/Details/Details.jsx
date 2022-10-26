import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usersContext } from '../../userContext';

const Details = () => {
    const { getOneUser, oneUser } = useContext(usersContext);

    const params = useParams();

    useEffect(() => {
        getOneUser(params.id);
    }, []);

  return oneUser ? (
    <div>
        <div>Name: {oneUser.name}</div>
        <div>LastName: {oneUser.lastName}</div>
        <div>Age: {oneUser.age}</div>
    </div>
  ) : (
      <h2>Loading...</h2>
  )
}

export default Details