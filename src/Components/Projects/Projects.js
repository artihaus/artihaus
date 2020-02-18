import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import AddProjectCard from './AddProjectCard'
import EditProjectModal from './EditProjectModal'

import './Projects.css'

class Projects extends Component {

    handleClientId(clients, _id) {
        let name = ''
        clients.forEach(client => {
            if (_id === client._id) name = client.name
        })
        return name
    }

    handleProjects(context) {
        const { projects, clients, isModalDisplaying } = context.state
        if (projects) {
            return (
                <div className='ap-ad--container'>
                {projects.length ?
                    <div className='ap-ad--grid'>
                    <AddProjectCard />
                            {
                                projects.map(project => {
                                    const { _id, name, address, city_code, client_id, status, started, finished } = project
                                    let client_name = this.handleClientId(clients, client_id)
                                    return (
                                        <div key={_id} className='ap-ad--grid--card'>
                                            <div className='app-ad--card-edit'
                                                onClick={() => {
                                                    context.updateProject(project)
                                                    context.updateModalDisplay()
                                                }}>
                                                <img src={require('../../Assets/Images/edit-icon.svg')} alt='edit' />
                                            </div>
                                            <div className='ap-ad--card-body --header'>{name.toUpperCase()}</div>
                                            <div className='ap-ad--card-body --header'>{CapitalizeFirst(client_name)}</div>
                                            <div className='ap-ad--card-body --address'>{CapitalizeFirst(address)}</div>
                                            <div className='ap-ad--card-body --address'>{city_code}</div>
                                            <div className='ap-ad--card-body --address'>{DateFormat(started)}</div>
                                            <div className='ap-ad--card-body  --dates'>{Status(status)} {DateFormat(finished)}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>Nothing to see here!</div>}
                    {isModalDisplaying && <EditProjectModal />}
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