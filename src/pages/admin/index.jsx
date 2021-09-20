import React, {Component} from 'react';
import memoryUtils from '../../utils/memoryUtils'
import {Redirect} from "react-router-dom";

class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        console.log('Admin',user);
        if (!user && !user.id) return <Redirect to={'/login'}/>
        return (
            <div>
                Hello {user.username}
            </div>
        );
    }
}

export default Admin;