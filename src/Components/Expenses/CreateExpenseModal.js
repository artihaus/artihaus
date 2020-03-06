import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import SubmitNewExpenseButton from '../Buttons/SubmitNewExpenseButton'
import DatePicker from '../DatePicker/DatePicker'

import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'

import './CreateExpenseModal.css'

class CreateExpenseModal extends Component {


    render() {
        return (
            <Consumer>
                {context => {
                    const { _id: project_id, name } = context.state.project
                    const { category, subcategory, amount, status, isArtipro, createdAt } = context.state.expense
                    return (
                        <div className='create-expense-container'>
                            <div className='create-expense-card'>
                                <Close close='close-add-expense-modal' />
                                <div className='create-expense-card--header'>Create Expense For {CapitalizeFirst(name)}</div>
                                <label htmlFor="category">Category: </label><input type="text" name="category" onChange={e => context.createNewExpense(e.target)} value={category} /><br />
                                <label htmlFor="subcategory">Subcategory: </label><input type="text" name="subcategory" onChange={e => context.createNewExpense(e.target)} value={subcategory} /><br />
                                <label htmlFor="amount">Amount: </label><input type="text" name="amount" onChange={e => context.createNewExpense(e.target)} value={amount} /><br />

                                <input type="radio" name="status" onChange={e => context.createNewExpense(e.target)} value={true} /><label htmlFor="status-true">Status Resolved</label>
                                <input type="radio" name="status" onChange={e => context.createNewExpense(e.target)} value={false} /><label htmlFor="status-false">Status Pending</label><br />

                                <input type="radio" name="isArtipro" onChange={e => context.createNewExpense(e.target)} value={true} /><label htmlFor="isArtipro-true">ArtiPro Expense</label>
                                <input type="radio" name="isArtipro" onChange={e => context.createNewExpense(e.target)} value={false} /><label htmlFor="isArtipro-false">Not Artipro Expense</label><br />
                                <label htmlFor="createdAt">CreatedAt: </label><div className='ap-ad--card-body' ><DatePicker origin='create-expense'/></div>
                                <div className='--button-grid-1'>
                                    <SubmitNewExpenseButton />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default CreateExpenseModal

/*
    project_id: '',
    category: '',
    subcategory: '',
    amount: '',
    status: '',
    createdBy: '',
    isArtipro: '',
    isApproved: '',
    createdAt: '',
    isUploaded: '',
*/