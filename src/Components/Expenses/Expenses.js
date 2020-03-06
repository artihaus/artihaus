import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
// import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import OpenModalButton from '../Buttons/OpenModalButton'
import UpdateExpenseModal from './UpdateExpenseModal'

import './Expenses.css'

class Expenses extends Component {

    state = {
        expenses: [],
        expensesOverviewCard: [],
        byCategoryArray: [],
        category: '',
        stashToResolve: [],
        stashToResolveAmount: 0,
        displayExpensesBy: ''
    }
    handleStashToResolve(expense) {
        const newState = this.state
        let index = 0
        let isStash = false
        newState.stashToResolve.forEach(stash => {
            if (stash._id === expense._id) {
                isStash = true
                newState.stashToResolveAmount -= expense.amount
                newState.stashToResolve.splice(index, 1)
            }
            index++
        })
        if (!isStash) {
            newState.stashToResolve.push(expense)
            newState.stashToResolveAmount += expense.amount
        }
        this.setState(newState)
    }

    handleFilterCategory(context) {
        const { expenses } = context.state
        let categoryArray = []
        let categoryArrayObject = []
        if (expenses.length) {
            expenses.forEach(expense => {
                if (!categoryArray.includes(expense.category)) {
                    categoryArray.push(expense.category)
                }
            })
            categoryArray.forEach(category => {
                let amount = 0
                expenses.forEach(expense => {
                    if (expense.category === category) amount += expense.amount
                })
                if (amount > 0) categoryArrayObject.push({ category, amount })
            })
        }
        return (
            categoryArrayObject.length ?
                <div className={this.state.byCategoryArray.length > 0 ? '' : 'ap-ad-expense-grid'}>
                    <div className='--category-header-grid'>
                        <div key='stash' className={this.state.category === 'stash' ? '--category-header-wrapper-active --category-tab' : '--category-header-wrapper --category-tab'} onClick={() => this.handleDisplayByCategory('stash', this.state.stashToResolve)}>
                            <div className='--category-tab-header'>STASH</div>
                            <div className='--category-tab-amount'>${this.state.stashToResolveAmount.toFixed(2)}</div>
                        </div>
                        {
                            categoryArrayObject.map(item => {
                                const { category, amount } = item
                                return (
                                    <div key={category} className={this.state.category === category ? '--category-header-wrapper-active --category-tab' : '--category-header-wrapper --category-tab'} onClick={() => this.handleDisplayByCategory(category, expenses)}>
                                        <div className='--category-tab-header'>{category.toUpperCase()}</div>
                                        <div className='--category-tab-amount'>${amount.toFixed(2)}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <div />
        )
    }

    handleDisplayByCategory(category, expenses) {
        const newState = this.state
        newState.category = category
        newState.byCategoryArray = []
        if (category === 'stash') {
            newState.byCategoryArray = newState.stashToResolve
        }

        expenses.forEach(expense => {
            if (expense.category === category) {
                newState.byCategoryArray.push(expense)
            }
        })
        this.setState(newState)
    }

    handleExpenseFilterSelect(context) {
        const newState = this.state
    }

    render() {
        return (
            <Consumer>
                {(context) => {
                    const { whichModalDisplay } = context.state
                    return (
                        <div>
                            <div className='ap-ad--container'>
                                {this.state.byCategoryArray.length ?
                                    <div className='ap-ad-expense-grid'>
                                        { this.handleFilterCategory(context) }
                                        {
                                            this.state.byCategoryArray.map(expense => {
                                                const { _id, category, subcategory, amount, createdBy, status, createdAt } = expense
                                                let addStashButton = true
                                                let isStash = false
                                                this.state.stashToResolve && this.state.stashToResolve.forEach(stash => {
                                                    if (stash._id === _id && this.state.category !== 'stash') addStashButton = false
                                                    if (stash._id === _id) isStash = true
                                                })
                                                return (
                                                    <div key={_id} className={!status ? '--status-pending ap-ad-expense-card' : 'ap-ad-expense-card'}>
                                                        <div className='--category'>{category.toUpperCase()}</div>
                                                        <div className='--sub-amount-grid'>
                                                            <div className='--subcategory'>{CapitalizeFirst(subcategory)}</div>
                                                            <div className='--amount'>${amount}</div>
                                                        </div>
                                                        <div className='--createdAt'>{DateFormat(createdAt)}</div>

                                                        <div className='--createdBy'><small>{createdBy}</small></div>
                                                        <div className='--button-grid-2'>
                                                            <OpenModalButton expense={expense} modal={`update-expense${_id}`} origin='Update' />
                                                            {
                                                                addStashButton && <button onClick={() => this.handleStashToResolve(expense)} >{isStash ? 'DISCARD' : 'STASH'}</button>
                                                            }
                                                        </div>
                                                        {whichModalDisplay === `update-expense${_id}` && <UpdateExpenseModal />}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    :
                                    <div>{ this.handleFilterCategory(context) }</div>
                                }
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Expenses

/*
*/