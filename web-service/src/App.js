import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/home";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import Login from "./pages/login";
import Council from "./pages/council";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app-routing">
                    <Route exact path="/" component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route path={"/dhmos/:id"} component={Council}/>
                </div>
            </Router>
        );
    }
}

export default App;