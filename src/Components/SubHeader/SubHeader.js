import React, { Component } from 'react'
import './SubHeader.css'


class SubHeader extends Component {

    render(){
        return(
            <div className='ap-ap-subheader'>
                <div className='ap-ap-subheader--my-portal'>My Portal</div>
                <div className='ap-ap-subheader--my-status'>Sub Header</div>
            </div>
        )
    }
}

export default SubHeader