import React from 'react'
import {useParams} from  'react-router-dom';
import { PlaceList } from './components/PlaceList'

const DUMMY_PLACES = [
  {
    id:'p1',
    title:'Empire State Building',
    description:'The state building',
    imageUrl:'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
    address:'20 W 29th St, New York, NY 10001',
    location:{
      lat:40.74575,
      lang:-73.98864,
    },
    creatorId:'u2'
  },
  {
    id:'p2',
    title:'Jesus Statue',
    description:'The Jesus Statue',
    imageUrl:'https://www.thoughtco.com/thmb/8BttMworG-ylWksgCO87j41hQRM=/3342x3342/smart/filters:no_upscale()/christredeemer-10139156-567c92283df78ccc15684502.jpg'
  ,address:'United StatesNYKings Co.',
  location:{
    lat:40.686848,
    lang:-73.99231,
  },
  creatorId:'u3'
  }

]

export const UserPlaces = () => {
 const userId  = useParams().userId;
 const loadedPlaces = DUMMY_PLACES.filter(place=>place.creatorId===userId);
  return <PlaceList items={loadedPlaces}/>
}
