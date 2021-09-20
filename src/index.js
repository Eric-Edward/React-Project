import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import {getUser} from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

memoryUtils.user = getUser()

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)