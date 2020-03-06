import React, { Component } from 'react'

import Consumer from '../../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../../../Components/GeneralFunctions/Moment'
import { CapitalizeFirst } from '../../../Components/GeneralFunctions/CapitalizeFirst'

import './ExpensesPrintOut.css'

class ExpensesPrintOut extends Component {

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
        let subcategoryArrayObject = []
        if (expenses) {
            expenses.forEach(expense => {
                if (!categoryArray.includes(expense.category)) {
                    categoryArray.push(expense.category)
                }
            })

            categoryArray.forEach(category => {
                subcategoryArrayObject.push({ category })
                let amount = 0
                expenses.forEach(expense => {
                    if (expense.category === category) amount += expense.amount
                })
                if (amount > 0) categoryArrayObject.push({ category, amount })
            })

            let index = 0
            subcategoryArrayObject.forEach( category => {
                expenses.forEach( expense =>{
                    const { subcategory } = expense
                    if( expense.category === category.category ){

                        subcategoryArrayObject.push({ subcategory })
                    }
                })
                index++
            })
            console.log(subcategoryArrayObject)
        }
        return (
            <div className=''>
                {
                    categoryArrayObject.map(item => {
                        const { category, amount } = item
                        return (
                            <div key={category} >
                                <div className='--category-header-wrapper --category-tab'>
                                    <div className='--category-tab-header'>{category.toUpperCase()}</div>
                                    <div className='--category-tab-amount'>${amount.toFixed(2)}</div>
                                </div>
                                {
                                    expenses.length ?
                                        expenses.map( expense => {
                                            if( expense.category === category ){
                                                return(
                                                    <div key={expense._id} className='--category-table'>
                                                        <div className='--inline-block'>{CapitalizeFirst(expense.subcategory)}</div>
                                                        <div className='--inline-block'>${expense.amount}</div>
                                                        <div className='--inline-block'>{DateFormat(expense.createdAt)}</div>
                                                    </div>
                                                )
                                            }
                                        })
                                    :
                                    <span />
                                }
                            </div>
                        )
                    })
                }
            </div>
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

    render() {
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div>
                            {this.handleFilterCategory(context)}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default ExpensesPrintOut

/*

<div className='ap-ad--container'>
                                {this.state.byCategoryArray.length ?
                                    <div className='ap-ad-expense-grid'>
                                        { this.handleFilterCategory(context) }
                                    </div>
                                    :
                                    <div>{ this.handleFilterCategory(context) }</div>
                                }
                            </div>


{
                                            this.state.byCategoryArray.map(expense => {
                                                const { _id, category, subcategory, amount, status, createdAt } = expense
                                                return (
                                                    <div key={_id} className={!status ? '--status-pending ap-ad-expense-card' : 'ap-ad-expense-card'}>
                                                        <div className='--category'>{category.toUpperCase()}</div>
                                                        <div className='--sub-amount-grid'>
                                                            <div className='--subcategory'>{CapitalizeFirst(subcategory)}</div>
                                                            <div className='--amount'>${amount}</div>
                                                        </div>
                                                        <div className='--createdAt'>{DateFormat(createdAt)}</div>
                                                    </div>
                                                )
                                            })
                                        }
*/