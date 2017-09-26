import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AwesomeComponent from "./components/AwesomeComponent";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn";

const App = () => (
    <div>
        <header>
            <NavBar/>
        </header>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/about' component={AwesomeComponent}/>
                <Route path='/login' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        </div>
    </div>
);


export default App;
// <Route path="/api" component={Api}/>