import React from 'react'
import { Link } from 'react-router-dom'
const style = {
    border: '2px solid',
    height: '20px',
    width: '20px',
    marginBottom: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
}

export const PrimaryLinkButton = (props) => (
    <div style={style}>
        <Link to={props.to} >
        {props.children}
        </Link>
    </div>
)