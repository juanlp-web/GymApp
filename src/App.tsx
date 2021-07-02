import React from 'react';
import GlobalStyle from "./styles/global"
import Navbar from "./components/Navbar"
import Menubar from "./components/Menubar"
import PageBody from "./components/PageBody"
import Login from './components/Login';
import StarBucks from './components/Ant/StarBucks';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Ant from './components/Ant';


const App:React.FC = ()=> (
  <>
   <GlobalStyle />
       <Router>
          <Switch>
            <Route path="/login">
            <Login /> 
            </Route>
            <Route path="/ant">
            <Login /> 
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
            <Redirect to="/login" /> 
            </Route>
          </Switch>
      </Router>
  </>
)

export default App;
