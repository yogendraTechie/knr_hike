import React, { Component,Fragment,lazy,Suspense } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
const AppRoutes = lazy(() => import('./components/routes/AppRoutes'));
const WebRoutes = lazy(() => import('./components/routes/WebRoutes'));
// import { Provider } from 'react-redux'
// import configureStore from './redux/store';
// const { store } = configureStore();

class App extends Component{
  
  render(){ 
    console.log('App')   
    return(
      // <Provider store={store}>
        <BrowserRouter>
        
          <Fragment>

            <div className="App" style={{width:'100%'}}>
              <Suspense fallback={<div>Loading..</div>}>
                {(window.screen.width < 760) ? <AppRoutes /> : <WebRoutes />}
              </Suspense>    
            
            </div>

          </Fragment>

        </BrowserRouter>
      // </Provider>
    )
  }
}

export default App;

