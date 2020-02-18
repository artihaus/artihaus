import React, { Component } from 'react'

import Earnings from '../../Utils/Server/Earnings'
import Expenses from '../../Utils/Server/Expenses'

class ProjectDetail extends Component {

    state = {}

    componentDidMount(){
        const newState = this.state
        newState.project = this.props.history.location.state.project
        Earnings
        .read({project_id: newState.project._id})
        .then( res_earnings => {
            newState.earnings = res_earnings.data.data
            Expenses
            .read({project_id: newState.project._id})
            .then( res_expenses => {
                newState.expenses = res_expenses.data.data
                this.setState(newState)
            })
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    render(){
        return(
            <div>Project Detail</div>
        )
    }
}

export default ProjectDetail