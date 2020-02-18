import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import EditExpenseModal from './EditExpenseModal'

import './Expenses.css'

class Expenses extends Component {

    handleClientId(clients, _id) {
        let name = ''
        clients.forEach(client => {
            if (_id === client._id) name = client.name
        })
        return name
    }

    handleExpenses(context) {
        const { projects, expenses, isModalDisplaying } = context.state
        console.log(expenses[0])
        if (expenses) {
            return (
                <div className='ap-ad--container'>
                    {expenses.length ?
                        <div className='ap-ad-expense-grid'>
                            {
                                expenses.map(expense => {
                                    const { _id, category, subcategory, amount, createdBy, status, createdAt } = expense
                                    // let client_name = this.handleClientId(clients, client_id)
                                    return (
                                        <div key={_id} className='ap-ad-expense-card'>
                                            <div className='--category'>{category.toUpperCase()}</div>
                                            <div className='--sub-amount-grid'>
                                                <div className='--subcategory'>{CapitalizeFirst(subcategory)}</div>
                                                <div className='--amount'>${amount}</div>
                                            </div>
                                            <div className='--status'>{!status && 'Status Pending'}</div>
                                            <div className='--createdAt'>{DateFormat(createdAt)}</div>

                                            <div className='--createdBy'><small>{createdBy}</small></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>Nothing to see here!</div>}
                    {isModalDisplaying && <EditExpenseModal />}
                </div>
            )
        }
    }

    render() {
        return (
            <Consumer>
                {(context) => this.handleExpenses(context)}
            </Consumer>
        )
    }
}

export default Expenses

/*
 <div className='app-ad--card-edit'
                                    //             onClick={() => {
                                    //                 context.updateProject(project)
                                    //                 context.updateModalDisplay()
                                    //             }}>
                                    //             <img src={require('../../Assets/Images/edit-icon.svg')} alt='edit' />
                                    //         </div>

                                    //         <div className='ap-ad--card-body --header'>{CapitalizeFirst(client_name)}</div>
                                    //         <div className='ap-ad--card-body --address'>{CapitalizeFirst(address)}</div>
                                    //         <div className='ap-ad--card-body --address'>{city_code}</div>
                                    //         <div className='ap-ad--card-body --address'>{DateFormat(started)}</div>
                                    //         <div className='ap-ad--card-body  --dates'>{Status(status)} {DateFormat(finished)}</div>
*/