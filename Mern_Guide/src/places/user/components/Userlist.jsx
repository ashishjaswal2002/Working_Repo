import React from 'react'

import './Userlist.css';
import { UserItem } from './UserItem';


 export const Userlist = (props) => {
  console.log(props.items);

  if( props.items.length === 0){
    return (
      <div className='center'>
        <h2>No User found.</h2>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {props.items.map((user)=>(
        <UserItem 
          key={user.id}
          id={user.id}
          image = {user.image} 
          name={user.name}
          placecount={user.places}
        />
      ))}
    </ul>
  );
}
