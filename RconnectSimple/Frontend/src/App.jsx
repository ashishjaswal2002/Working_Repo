import { useState } from "react";
function App() {

  const [form,setform] = useState('');

const handleform = (e)=>{
 
  setform({
    ...form,
    [e.target.name]: e.target.value
  });

  
}
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(form);
}

  return (
    <div >
    <form action="" onSubmit={handleSubmit}>
  {/* {JSON.stringify(form)} For the debugging purposes* */}
<span>Username</span>
      <input type="text" name="username" onChange={handleform}/>
      <span>Password</span>
      <input type="text" name="password"  onChange={handleform}/>
      <input type="submit" />
    </form>

    </div>
  )
}

export default App
