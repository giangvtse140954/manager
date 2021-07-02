import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import { makeStyles } from '@material-ui/core';
import Dashboard from './pages/main/Dashboard';
import UserManagement from './pages/main/UserManagement';
import NavBar from './common/NavBar';
import GarageProfile from './pages/main/GarageProfile';
import ServiceManagement from './pages/main/ServiceManagement';
import ProductManagement from './pages/main/ProductManagement';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginTop: 75,
  },
}));
const App = () => {
  const classes = useStyles();

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <PrivateRoute
            exact
            path='/'
            component={ProductManagement}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/product-management'
            component={ProductManagement}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/user-management'
            component={UserManagement}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/dashboard'
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/service-management'
            component={ServiceManagement}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/garage-profile'
            component={GarageProfile}
          ></PrivateRoute>
        </main>
      </div>
    </Switch>
  );
};

export default App;
