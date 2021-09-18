import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path={'/'} component={Admin}/>
                {/*  这里进行路由匹配的时候，会自动的匹配到了'/'，所以这里写redirect也没有什么用  */}
            </Switch>
        );
    }
}

export default App;