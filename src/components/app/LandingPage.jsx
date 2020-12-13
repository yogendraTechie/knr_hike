import React,{Component,Fragment} from 'react';
import Header from './common/Header.jsx'

class LandingPage extends Component{

    render(){
        console.log('LandingPage')
        return(
            <Fragment>
                <Header />
                <div>
                    Landing Page
                </div>
            </Fragment>
        )
    }

}

export default LandingPage;