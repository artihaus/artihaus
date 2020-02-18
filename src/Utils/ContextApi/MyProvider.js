import React, { Component } from 'react'
import Moment from 'moment'

import ClientsApi from '../../Utils/Server/Clients'
import ProjectsApi from '../../Utils/Server/Projects'
import ExpensesApi from '../../Utils/Server/Expenses'

const { Provider, Consumer } = React.createContext()


class MyProvider extends Component {
    state = {
        newProject: {
            name: '',
            address: '',
            address2: '',
            city_code: '',
            client_id: '',
            user_id: '5e21fa1183e005ceafe11c16',
            status: false,
            started: '',
        },
        updateProject: [],
        isModalDisplaying: false
    }
    componentDidMount() {
        (async () => {
            const newState = this.state
            const projects = ProjectsApi
                .read_false({})
                .then(projects => {
                    newState.projects = projects.data
                    this.setState(newState)
                })

            const clients = ClientsApi
                .read({})
                .then(clients => {
                    newState.clients = clients.data
                    this.setState(newState)
                })

            const expenses = ExpensesApi
                .read_false({})
                .then(expenses => {
                    newState.expenses = expenses.data
                    this.setState(newState)
                })
        })()
    }

    render() {
        return (
            <Provider
                value={{
                    state: this.state,

                    updateModalDisplay: () => {
                        this.setState({ isModalDisplaying: !this.state.isModalDisplaying })
                    },

                    updateProject: project => {
                        this.setState({ updateProject: project })
                    },

                    updateProjectValue: ({ name: key, value }) => {
                        const newState = this.state
                        if (key === 'name') newState.updateProject.name = value
                        if (key === 'address') newState.updateProject.address = value
                        if (key === 'address2') newState.updateProject.address = value
                        if (key === 'city_code') newState.updateProject.city_code = value
                        if (key === 'client_id') newState.updateProject.client_id = value
                        if (key === 'user_id') newState.updateProject.user_id = value
                        if (key === 'status') newState.updateProject.status = value
                        if (key === 'started') newState.updateProject.started = value
                        if (key === 'finished') newState.updateProject.finished = value
                        this.setState(newState)
                    },

                    newProjectCreate: ({ name: key, value }) => {
                        const newState = this.state
                        if (key === 'name') newState.newProject.name = value
                        if (key === 'address') newState.newProject.address = value
                        if (key === 'city_code') newState.newProject.city_code = value
                        if (key === 'client_id') newState.newProject.client_id = value
                        if (key === 'started') newState.newProject.started = value
                        this.setState(newState)
                    },

                    addNewProjectToState: (project) => {
                        const newState = this.state
                        newState.projects.unshift(project)

                        this.setState(newState)
                    },
                    clearNewProject: () => {
                        const newState = this.state
                        const { newProject } = newState
                        newState.newProject.name = ''
                        newState.newProject.address = ''
                        newState.newProject.address2 = ''
                        newState.newProject.city_code = ''
                        newState.newProject.client_id = ''
                        newState.newProject.user_id = '5e21fa1183e005ceafe11c16'
                        newState.newProject.status = false
                        newState.newProject.started = ''
                        this.setState(newState)
                }
                }} >

                    { this.props.children }

            </Provider >
        )
    }
}

export { MyProvider }

export default Consumer
