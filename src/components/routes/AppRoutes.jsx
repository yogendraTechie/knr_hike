import React,{Component} from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from '../app/LandingPage.jsx'

class AppRoutes extends Component{
    
    render(){
        console.log('AppRoutes')
        return(
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        )
    }

}

export default AppRoutes;