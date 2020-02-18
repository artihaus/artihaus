import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

import './Close.css'

class AddProjectButton extends Component {

    handleSubmit(context) {
        const { newProject, clients, projects } = context.state
        newProject.name = newProject.name.toLowerCase()
        newProject.address = newProject.address.toLowerCase()
        newProject.client_id = newProject.client_id.toLowerCase()

        clients.forEach(client => {
            if (client.name === newProject.client_id.toLowerCase()) {
                newProject.client_id = client._id
            }
        })
        
        ProjectApi
        .create(newProject)
        .then(res => {
            context.addNewProjectToState(res.data)
            context.clearNewProject()
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div>
                            <button type='submit' onClick={() => this.handleSubmit(context)}>Create New Project</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddProjectButton