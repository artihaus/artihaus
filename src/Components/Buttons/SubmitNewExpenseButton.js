import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import ExpenseApi from '../../Utils/Server/Expenses'

import './Close.css'

class SubmitNewExpenseButton extends Component {

    handleSubmit(context) {
        const { _id: project_id } = context.state.project
        let { category, subcategory, amount, status, isArtipro, createdAt } = context.state.expense
        const userCredentials = context.getUserCredentials()
        const isApproved = userCredentials.user_right === 'admin' ? true : false

        if(category && subcategory && amount && status && isArtipro && createdAt && project_id){
            ExpenseApi
            .create({
                project_id,
                createdBy: userCredentials.user_id,
                category,
                subcategory,
                amount,
                status,
                isArtipro,
                isApproved,
                createdAt
            })
            .then( res => {
                context.addNewExpenseToState( res.data )
            })
        }
    }

    render() {
        const style = {
            marginTop: '32px',
            height: '25px',
        }
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div>
                            <button style={style} type='submit' onClick={() => this.handleSubmit(context)}>Create New Expense</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SubmitNewExpenseButton