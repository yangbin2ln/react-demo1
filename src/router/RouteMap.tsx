import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {Login} from '../components/Login';

class RouteMap extends React.Component {  
    updateHandle() {  
        console.log('每次router变化之后都会触发')  
    }  
    render() {  
        return (  
             <HashRouter>
                 <Route path="/" component={Login} />
             </HashRouter>
        )  
    }  
}  

export {RouteMap};