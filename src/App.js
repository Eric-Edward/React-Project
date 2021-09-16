import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path={'/'} component={Admin}/>
                <Redirect to={'/login'}/>
            </Switch>
        );
    }
}

export default App;