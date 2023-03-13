import React,{useCallback,useReducer} from "react";

import "./NewPlace.css";
import { Input } from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/util/Validators";
import { VALIDATOR_MINLENGTH } from "../../shared/components/util/Validators";
import Button from "../../shared/components/FormElements/Button";

const formReducer = (state,action)=>{
switch (action.type){
  case 'INPUT_CHANGE':
    let formisValid  = true;

    for(const inputId in state.inputs){
      if(inputId===action.inputId){
        formisValid = formisValid && action.isValid;
      }else{
        formisValid = formisValid && state.inputs[inputId].isValid;
      }
    }
     return {
      ...state,
      input:{
        ...state.inputs,
        [action.inputId]:{value:action.value,isValid:action.isValid}
      },
      isValid:formisValid

     };default :
        return state;
}
 
};



export const NewPlace = () => {

 const [formState,dispatch]=useReducer(formReducer,{
  inputs:{
    title:{
      value:'',
      isValid:false
    }
  },
  isValid:false,
 })

  const titleInputHandler = useCallback((id,value,isValid)=>{
       dispatch({type:'INPUT_CHANGE',value:value,isValid:isValid,inputId:id})
  },[]);
 
  const placeSubmitHandler = event=>{
    event.preventDefault();
    console.log(formState.inputs)
  }
  
  return (
    <form action="place-form" onSubmit={placeSubmitHandler }>
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput = {titleInputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput = {titleInputHandler}
      />
      <Button type="submit" disabled={formState.isValid}>Add Place</Button>
    </form>
  );
};
