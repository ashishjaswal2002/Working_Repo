
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import { NewPlace } from './places/pages/NewPlace';
import React from 'react';
import { User } from './places/user/pages/User';
User
function App() {
return <Router>
  <Switch>
  
  <Route path="/" exact >
    {/* If we set exact then it means that if you adding /sdsd then it should render not the user */}
    <User/>
    </Route>
  <Route path="/pages/new">
   <NewPlace/>
  </Route>
   <Redirect to="/" />
   {/* If we add Redirect then if the user entered /sdf then it alwayys redirect to the user section */}
   </Switch>
</Router>
}

export default App
