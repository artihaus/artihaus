import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'
import ExpenseApi from '../../Utils/Server/Expenses'

import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import './Close.css'

class Delete extends Component {

    handleDelete(_id, context, origin) {
        console.log(_id, origin)
        const { projects, expenses } = context.state
        const confirm = window.confirm(`Artihaus Will Permanently Remove This ${origin}`)
        if (confirm) {
            switch (origin) {
                case 'Project': {
                    ProjectApi
                        .remove({
                            _id
                        })
                        .then(res => {
                            let index = 0
                            projects.forEach(project => {
                                if (project._id === _id) {
                                    delete projects[index]
                                    context.modalDisplay('close')
                                }
                                index++
                            })
                        })
                        .catch(err => console.log(err))
                    break;
                }
                case 'Expense': {
                    ExpenseApi
                        .remove({
                            _id
                        })
                        .then(res => {
                            context.removeExpenseFromExpenses(_id)
                            context.modalDisplay('close')
                            return 'done'
                        })
                        .catch(err => console.log(err))
                    break;
                }
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <Consumer>
                {(context) => {
                    console.log(this.props.origin)
                    const { project, expense } = context.state
                    let _id
                    if( this.props.origin === 'project' ) { _id = project._id }
                    if( this.props.origin === 'expense' ) { _id = expense._id }

                    let origin = CapitalizeFirst(this.props.origin)
                    return (
                        <div>
                            <button type='submit' onClick={() => this.handleDelete(_id, context, origin)}>Delete This {origin}</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Delete