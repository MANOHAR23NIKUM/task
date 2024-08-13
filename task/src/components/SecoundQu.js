import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const SecoundQu = () => {
  const values = useContext(UserContext);
  return (
    <div>
      <h2>Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City:{user.city}</p>
      <p>Contact Number: {user.contactNumber}</p>
    </div>
  )
}

export default SecoundQu
// 2)Extend the context to pass multiple values:Name,Email,City,Conatct Number and display them in the child component.