import React from 'react';
import '../App.css'

function Square(props) {
    return <div className='Square' onClick={props.onClick}>{props.children}</div>
}

export default Square;