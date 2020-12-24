import React,{Component} from 'react';
import { Switch, Route,Redirect } from "react-router-dom";

import LandingPage from '../app/LandingPage.jsx'

class AppRoutes extends Component{
    
    render(){
        console.log('WebRoutes')
        return(
            <Switch>
                <Route exact path="/" render={()=>'Web Page'}/>
                <Redirect to='/' />
            </Switch>
        )
    }

}

export default AppRoutes;