import React from 'react'
import './NewPlace.css';
import { Input } from '../../shared/components/FormElements/Input';

export const NewPlace = () => {
  return (
     <form action="place-form">
      <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter a valid title" />
      
     </form>
  )
}
