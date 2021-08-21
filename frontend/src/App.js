// import { react } from "@babel/types";
import React from 'react';
import Todo from "./components/Todo";
import LineBar from './components/lineBar/LineBar';
import PieChart from './components/Pie/PieChart';

import ParalleCordinateCHart from './components/ParallelCordinates/ParallelCordinate';
import ContourChart from './components/ContourChart/ContourChart';
import HeatMap from './components/HeatMap/HeatMap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch,Redirect,useLocation } from 'react-router-dom';
import Navbar from './components/Navabar/NavBar';
import BootStrapNavBar from './components/BootStrapNavBar/BootStrapNavBar';
import Login from './components/Login/Login';

// NOTICE THAT BELOW WE ARE SENDING THE PROPS IN ROUTE TAG IN HEAT MAP AND PIE COMPONENT BY FAT ARROW FUNCTION 
// Also we generally not use render method of react router,when we have to pass props in that component,AS it will rerender the component on change where as ,render method just update the component. 
const App = () => {

  const location = useLocation();
  console.log("the URL that we are visisting is",location.pathname);

  if(location.pathname === "/")
  {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </>
    )
  }
  else{
    return (
      <>
        <BootStrapNavBar  />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/heatmap" component={() => <HeatMap yAxis={['Morning', 'Afternoon', 'Evening']} />} />
          <Route exact path="/pie" render={() => <PieChart labels={["High Quality", "Medium Quality", "Low Quality"]} />} />
          <Route exact path="/linebar" component={LineBar} />
          <Route exact path="/parallel" component={ParalleCordinateCHart} />
          <Route exact path="/contour" component={ContourChart} />
          <Redirect to="/" />
        </Switch>  
      </>
    )
  }

  
}

export default App;