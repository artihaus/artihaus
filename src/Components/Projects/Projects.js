import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import CreateProjectCard from './CreateProjectCard'
import UpdateProjectModal from './UpdateProjectModal'
import CreateExpenseModal from '../Expenses/CreateExpenseModal'
import CreateEarningModal from '../Earnings/CreateEarningModal'
import OpenModalButton from '../Buttons/OpenModalButton'

class Projects extends Component {

    handleClientId(clients, _id) {
        let name = ''
        clients.forEach(client => {
            if (_id === client._id) name = client.name
        })
        return name
    }

    handleProjects(context) {
        const { projects, clients, whichModalDisplay } = context.state
        if ( projects && clients ) {
            return (
                <div className='ap-ad--container'>
                    {projects.length ?
                        <div className='ap-ad--grid'>
                            <CreateProjectCard />
                            {
                                projects.map(project => {
                                    const { _id, name, address, city_code, client_id, status, started, finished } = project
                                    let client_name = this.handleClientId(clients, client_id)
                                    return (
                                        <div key={_id} >
                                            <div className='ap-ad--grid--card'>
                                                <div className='ap-ad--card-body --header'>{name.toUpperCase()}</div>
                                                <div className='ap-ad--card-body --header'>{CapitalizeFirst(client_name)}</div>
                                                <div className='ap-ad--card-body --address'>{CapitalizeFirst(address)}</div>
                                                <div className='ap-ad--card-body --address'>{city_code}</div>
                                                <div className='ap-ad--card-body --address'>{DateFormat(started, 'Undergoing')}</div>
                                                <div className='ap-ad--card-body  --dates'>{Status(status)} {DateFormat(finished, 'Undergoing')}</div>
                                                <div className='--button-grid-4'>
                                                    <OpenModalButton project={project} modal={`update-project${_id}`} origin='Update'/>
                                                    <OpenModalButton project={project} modal={`create-expense${_id}`} origin='Expense'/>
                                                    <OpenModalButton project={project} modal={`create-earning${_id}`} origin='Earning'/>
                                                    <OpenModalButton project={project} modal={`create-timesheet${_id}`} origin='TimeSheet'/>
                                                </div>
                                            </div>
                                            {whichModalDisplay === `update-project${_id}` && <UpdateProjectModal />}
                                            {whichModalDisplay === `create-earning${_id}` && <CreateEarningModal />}
                                            {whichModalDisplay === `create-expense${_id}` && <CreateExpenseModal />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='ap-ad--grid'>
                            <CreateProjectCard />
                        </div>
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <Consumer>
                {(context) => this.handleProjects(context)}
            </Consumer>
        )
    }
}

export default Projects