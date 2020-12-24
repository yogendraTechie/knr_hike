import React,{Component} from 'react';
import { Switch, Route,Redirect } from "react-router-dom";

import LandingPage from '../app/LandingPage.jsx'

class AppRoutes extends Component{
    
    render(){
        console.log('AppRoutes')
        return(
            <Switch>
                <Route exact path="/knr_hike" component={LandingPage} />
                <Redirect to='/knr_hike' />
            </Switch>
        )
    }

}

export default AppRoutes;