import React from 'react';
import './index.less'

export default function LinkButton(props) {
    return <button className={'linkbutton'} {...props}>{props.children}</button>
}