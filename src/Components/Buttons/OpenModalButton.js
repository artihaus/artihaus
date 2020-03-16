import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

class OpenModal extends Component {

    render() {
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div onClick={() => {
                            if (this.props.project) context.updateProject(this.props.project)
                            if (this.props.expense) context.updateExpense(this.props.expense)
                            if (this.props.earning) context.updateEarning(this.props.earning)
                            context.modalDisplay(this.props.modal)
                        }}>
                            <button type='button' className='--open-modal-button'>
                                <div>
                                    <img src={
                                        this.props.origin === 'Update' ? require('../../Assets/Images/edit-icon.svg') :
                                            this.props.origin === 'Expense' ? require('../../Assets/Images/expense-icon-on-white.svg') :
                                                this.props.origin === 'Earning' ? require('../../Assets/Images/earning-icon-on-white.svg') :
                                                    this.props.origin === 'TimeSheet' ? require('../../Assets/Images/timesheet-icon-on-white.svg') :
                                                        ''
                                    }
                                        alt='multi icon' />
                                </div>
                                <div>{this.props.origin.toUpperCase()}</div>
                            </button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default OpenModal