import React from 'react';

//routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';

//pages
import HomePage from '../../Pages/HomePage'
import DetailsPage from '../../Pages/DetailsPage'


const  App = () => {
 return(
  <BrowserRouter>
    <div className="app-wrapper">
     <Switch>
       <Route path={routes.HOME} exact component={HomePage} />
       <Route path={routes.DETAILS} component={DetailsPage} />

       <Redirect to={routes.HOME} />
     </Switch>
    </div>
  </BrowserRouter>
 )
}

export default App;
