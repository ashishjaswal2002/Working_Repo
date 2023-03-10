
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import { NewPlace } from './places/pages/NewPlace';
import React from 'react';
import { User } from './places/user/pages/User';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';
function App() {
return <Router>
  <MainNavigation/>
  <main>
  <Switch>
  
  <Route path="/" exact >
    {/* If we set exact then it means that if you adding /sdsd then it should render not the user */}
    <User/>
    </Route>
  <Route path="/places/new">
   <NewPlace/>
  </Route>
   <Redirect to="/" />
   {/* If we add Redirect then if the user entered /sdf then it alwayys redirect to the user section */}
   </Switch>
   </main>
</Router>
}

export default App;

// 50 Animating completed.