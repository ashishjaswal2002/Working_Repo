import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../../../shared/components/UIElement/Avatar';

import './UserItem.css';
import Card from '../../../shared/components/UIElement/Card';

export const UserItem = (props) => {
  return (
    
      <li className='user-item'>
   <div className=''>
    <Card className='user-item__content'>   
       <Link to={`/${props.id}/places`}>
    <div className="user-item__image">
      <Avatar image={props.image}/>
    </div>
    <div className='user-item__info'>
       <h2>{props.name}</h2>
       <h3>{props.placecount}{props.placecount===1 ?'Place':'Places'}</h3>
    </div>
    </Link>
    </Card>

   </div>

      </li>
 
 
  );
};
