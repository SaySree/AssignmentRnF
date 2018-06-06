import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../components/Login';
import Layout from './Layout';
import Root from './root_container';
import Admin from '../components/administrative_interface';
import Form from '../components/Form';
import Logout from '../components/LogOut/logout';

const routes = (
    <div>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={Admin} />
        <Route path="/search" component={Layout} />
        <Route path="/forms" component={Form} />
        
      </Switch>
    </div>
  );
  
  export default routes;