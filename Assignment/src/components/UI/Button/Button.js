import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        style={{ marginTop:'10px',backgroundColor: '#D8D428',color: 'black'}}
        onClick={props.clicked}>{props.children}</button>
);

export default button;