import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import UpdateExpenseButton from '../Buttons/UpdateExpenseButton'
import Delete from '../Buttons/Delete'
import { DateFormat } from '../GeneralFunctions/Moment'

import './UpdateExpenseModal.css'


class EditProjectModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { expense } = context.state
                    let { category, subcategory, amount, status, createdBy, isArtipro, isApproved } = expense

                    return (
                        <div className='update-expense-container'>
                            <div className='update-expense-card'>
                                <Close close='update-expense' />
                                <div className='update-expense-card--header'>
                                    UPDATE EXPENSE
                                </div>
                                <label htmlFor="name">Category: </label><input type="text" name="category" onChange={e => context.updateExpenseValue(e.target)} value={category} /><br />
                                <label htmlFor="name">Subcategory: </label><input type="text" name="subcategory" onChange={e => context.updateExpenseValue(e.target)} value={subcategory} /><br />
                                <label htmlFor="name">Amount: </label><input type="text" name="amount" onChange={e => context.updateExpenseValue(e.target)} value={amount} /><br />

                                <input type="radio" name="status" onChange={e => context.updateExpenseValue(e.target)} value={true} /><label htmlFor="true">Status Resolved</label><br />

                                <div className='--button-grid-2'>
                                    <UpdateExpenseButton />
                                    <Delete origin='expense' />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditProjectModal