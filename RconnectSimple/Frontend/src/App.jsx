import { useEffect } from "react";
import { useState } from "react";
function App() {

  const [form,setform] = useState({
    username:'',
    password:''
  });
  const [users,setUsers] = useState([]);

const handleform = (e)=>{
  console.log("HandleForm")
 if(!e.target.value){
  return;
 }
  setform({
    ...form,
    [e.target.name]: e.target.value
  });

  
  
}
const handleSubmit = async(e)=>{
  e.preventDefault();
//Adding Fetch method
const response = await fetch('http://localhost:8080/demo',{
  method:'POST',
  body:JSON.stringify(form),
  headers:{
    'Content-Type':'application/json',


  }

})
const data = await response.json();
  
  setform({
    username:'',
    password:''
  });

}
const getUsers = async()=>{
  const response = await fetch('http://localhost:8080/demo',{
  method:'GET',
})
const data = await response.json();
  setUsers(data);

}
useEffect(()=>{
  getUsers();
},[users])

 
  return (
    <div >
    <form action="" onSubmit={handleSubmit}>
  {/* {JSON.stringify(form)} For the debugging purposes* */}
<span>Username</span>
      <input type="text" name="username" value={form.username} onChange={handleform}/>
      <span>Password</span>
      <input type="text" name="password" value={form.password}  onChange={handleform}/>
      <input type="submit" />
    </form>
<div>
  <ul>
    {users.map(user=>(<li key={user._id}>
      {user.username}
    </li>))}
  </ul>
</div>
    </div>
  )
}

export default App
