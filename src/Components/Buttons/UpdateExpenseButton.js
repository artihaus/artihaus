import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ExpenseApi from '../../Utils/Server/Expenses'

import './Close.css'

class UpdateExpenseButton extends Component {

    handleUpdate( context ){
        const { expense } = context.state
        console.log(expense)
        ExpenseApi
        .update( expense )
        .then( res => {
            context.updateStateOfExpenses( expense )
        })
        .catch( err => {
            console.log(err)
        })
    }

    render(){
        return(
            <Consumer>
                {(context) => {
                    return(
                        <div>
                            <button type='submit' onClick={ ()=> {
                                this.handleUpdate( context )
                                context.modalDisplay()
                            }}>Update This Expense</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default UpdateExpenseButton