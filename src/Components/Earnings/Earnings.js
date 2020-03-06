import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
// import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import OpenModalButton from '../Buttons/OpenModalButton'

import './Earnings.css'

class Earnings extends Component {

    state = {}

    render() {
        return (
            <Consumer>
                {(context) => {
                    const { whichModalDisplay } = context.state
                    console.log(context.state.earnings)
                    return (
                        <div>
                            <div className='ap-ad--container'>
                                Earnings
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Earnings

/*

*/