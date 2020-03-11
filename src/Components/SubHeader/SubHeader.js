import React, { Component } from 'react'
import HamMenu from '../Buttons/HamburgerMenu'
import Consumer from '../../Utils/ContextApi/MyProvider'

import './SubHeader.css'


class SubHeader extends Component {

    state={
        className: false
    }

    toggleClass(){
        this.setState({ className: !this.state.className })
    }

    render(){
        return(
            <Consumer>
            {
                context => {
                    const { dashboard } = context.state
                    return (
                        <div className='ap-ap-subheader'>
                        <div className='ap-ap-subheader--my-portal'><HamMenu />My Portal</div>
                        
                        </div>
                    )
                }
            }
            </Consumer>
        )
    }
}

export default SubHeader