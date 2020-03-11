import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import './Close.css'

class OpenModal extends Component {

    render() {
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div onClick={() => {
                            if(this.props.expense) context.updateExpense( this.props.expense )
                            if(this.props.project) context.updateProject( this.props.project )
                            context.modalDisplay(this.props.modal)
                        }}>
                            <button type='button' className='--open-modal-button'><img 
                            src={
                                this.props.origin === 'Update' ? require('../../Assets/Images/edit-icon.svg') :
                                this.props.origin === 'Expense' ? require('../../Assets/Images/expense-icon-on-white.svg') :
                                this.props.origin === 'Earning' ? require('../../Assets/Images/earning-icon-on-white.svg') :
                                this.props.origin === 'TimeSheet' ? require('../../Assets/Images/timesheet-icon-on-white.svg') :
                                ''
                                }
                            alt='multi icon' />{this.props.origin.toUpperCase()}</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default OpenModal