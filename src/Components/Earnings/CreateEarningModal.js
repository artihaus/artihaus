import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
// import { DateFormat } from '../GeneralFunctions/Moment'
// import UpdateProjectButton from '../Buttons/UpdateProjectButton'
import Delete from '../Buttons/Delete'

import './CreateEarningModal.css'

class CreateEarningModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { name } = context.state.project
                    return (
                        <div className='create-earning-container'>
                            <div className='create-earning-card'>
                                    <div className='create-earning-card--header'>
                                    <Close close='close-add-earning-modal'/>
                                        Create Earning For {CapitalizeFirst(name)}
                                    </div>
                                <Delete origin='earning'/>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default CreateEarningModal