import React from "react";
import { useReducer,useEffect } from "react";
import "./Input.css";
import { validate } from "../util/Validators";

// Using Use reducer

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

      case 'TOUCH':{
        return {
          ...state,
          isTouched:true
        }
      }

    default:
      return state;
  }
};

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched:false,
    isValid: false,
  });
  const {id,onInput}  = props;
  const {value,isValid} = inputState;

  useEffect(()=>{
       onInput(props.id,inputState.value,inputState.isValid)
  },[id,value,isValid,onInput])

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
 const touchHandler = ()=>{
  dispatch({
    type:'TOUCH'
  })

 }

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}

      />
    ) : (
      <textarea id={props.id} rows={props.row || 3} onChange={changeHandler} onBlur={touchHandler}/>
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>

      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
