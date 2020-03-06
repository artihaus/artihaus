import React, { Component } from 'react'
import Moment from 'moment'

import ClientsApi from '../../Utils/Server/Clients'
import ProjectsApi from '../../Utils/Server/Projects'
import ExpensesApi from '../../Utils/Server/Expenses'
import EarningApi from '../../Utils/Server/Earnings'

const { Provider, Consumer } = React.createContext()


class MyProvider extends Component {
    state = {
        project: {
            name: '',
            address: '',
            address2: '',
            city_code: '',
            client_id: '',
            user_id: '',
            status: '',
            started: '',
            finished: ''
        },
        earning: {
            project_id: '',
            user_id: '',
            amount: '',
            category: '',
            size: '',
            details: '',
            status: '',
            paidAt: '',
            isUploaded: '',
        },
        expense: {
            project_id: '',
            category: '',
            subcategory: '',
            amount: '',
            status: '',
            createdBy: '',
            isArtipro: '',
            isApproved: '',
            createdAt: '',
            isUploaded: '',
        },
        projectToCreate: {
            name: '',
            address: '',
            address2: '',
            city_code: '',
            client_name: '',
            started: '',
        },

        whichModalDisplay: '',
        modalKey: '',
    }
    componentDidMount() {
        (async () => {
            const newState = this.state
            const projects = ProjectsApi
                .read({})
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
                .read({})// .read_date_range({start: '2019-07-15', end: '2020-01-01'})
                .then(expenses => {
                    newState.expenses = expenses.data.sort((a, b) => a.updated_at - b.updated_at)
                    this.setState(newState)
                })

            const earnings = EarningApi
                .read({})
                .then(earnings => {
                    newState.earnings = earnings.data.sort((a, b) => a.updated_at - b.updated_at)
                    this.setState(newState)
                })
        })()
    }

    render() {
        return (
            <Provider
                value={{
                    state: this.state,
                    updateStateOfProjects: (project) => {
                        const newState = this.state
                        newState.projects.forEach(stateProject => {
                            if (stateProject._id === project._id) {
                                stateProject = project
                                this.setState(newState)
                            }
                        })
                    },

                    updateStateOfExpenses: (expense, ) => {
                        const newState = this.state
                        newState.expenses.forEach(stateExpense => {
                            if (stateExpense._id === expense._id) {
                                stateExpense = expense
                                this.setState(newState)
                            }
                        })
                    },
                    removeExpenseFromExpenses: _id => {
                        const newState = this.state
                        let index = 0
                        newState.expenses.forEach( expense => {
                            if (expense._id === _id) {
                                newState.expenses.splice(index, 1)
                            }
                            index++
                        })
                        this.setState(newState)
                    },

                    modalDisplay: (modal) => {
                        this.setState({
                            whichModalDisplay: modal
                        })
                    },
                    // modalKeyDisplay: (_id) => {
                    //     this.setState({
                    //         modalKey: _id
                    //     })
                    // },

                    updateProject: project => {
                        this.setState({ project: project })
                    },

                    updateExpense: expense => {
                        this.setState({ expense: expense })
                    },

                    updateProjectValue: ({ name: key, value }) => {
                        const newState = this.state
                        if (key === 'name') newState.project.name = value
                        if (key === 'address') newState.project.address = value
                        if (key === 'address2') newState.project.address2 = value
                        if (key === 'city_code') newState.project.city_code = value
                        if (key === 'client_id') newState.project.client_id = value
                        if (key === 'user_id') newState.project.user_id = value
                        if (key === 'status') newState.project.status = value
                        if (key === 'started') newState.project.started = value
                        if (key === 'finished') newState.project.finished = value
                        this.setState(newState)
                    },

                    updateExpenseValue: ({ name: key, value }) => {
                        const newState = this.state
                        if (key === 'category') newState.expense.category = value
                        if (key === 'subcategory') newState.expense.subcategory = value
                        if (key === 'amount') newState.expense.amount = value
                        if (key === 'status') newState.expense.status = value
                        if (key === 'createdBy') newState.expense.createdBy = value
                        if (key === 'isArtipro') newState.expense.isArtipro = value
                        if (key === 'isApproved') newState.expense.isApproved = value
                        this.setState(newState)
                    },

                    createNewProject: ({ name: key, value }) => {
                        const newState = this.state
                        if (key === 'name') newState.projectToCreate.name = value
                        if (key === 'address') newState.projectToCreate.address = value
                        if (key === 'city_code') newState.projectToCreate.city_code = value
                        if (key === 'client_name') newState.projectToCreate.client_name = value
                        if (key === 'started') newState.projectToCreate.started = value
                        this.setState(newState)
                    },

                    createNewExpense: ({ name: key, value }) => {
                        const newState = this.state
                        console.log(key, value)
                        if (key === 'category') newState.expense.category = value
                        if (key === 'subcategory') newState.expense.subcategory = value
                        if (key === 'amount') newState.expense.amount = value
                        if (key === 'status') newState.expense.status = value
                        if (key === 'isArtipro') newState.expense.isArtipro = value
                        if (key === 'isApproved') newState.expense.isApproved = value
                        if (key === 'createdAt') newState.expense.createdAt = value
                        this.setState(newState)
                    },

                    setStateForEarning: ({ name: key, value }) => {
                        const newState = this.state
                        if( key === 'project_id' ) newState.earning.project_id = value
                        if( key === 'user_id' ) newState.earning.user_id = value
                        if( key === 'amount' ) newState.earning.amount = value
                        if( key === 'category' ) newState.earning.category = value
                        if( key === 'size' ) newState.earning.size = value
                        if( key === 'details' ) newState.earning.details = value
                        if( key === 'status' ) newState.earning.status = value
                        if( key === 'paidAt' ) newState.earning.paidAt = value
                        this.setState(newState)
                    },

                    getClientCredentials: (client_name, user_id) => {
                        const newState = this.state
                        let client_id
                        let found_client = false
                        if (newState.clients) {
                            newState.clients.forEach(client => {
                                if (client.name === client_name) {
                                    client_id = client._id
                                    found_client = true
                                }
                            })
                        }
                        if (!found_client) {
                            ClientsApi
                                .create({
                                    name: client_name,
                                    user_id
                                })
                                .then(res => {
                                    newState.clients.unshift(res.data)
                                    const { _id } = res.data
                                    client_id = _id
                                })
                                .catch(err => console.log(err))
                        }
                        return client_id
                    },

                    getUserCredentials: () => {
                        const gui = JSON.parse(localStorage.getItem('gui'))
                        return (gui)
                    },

                    addNewProjectToState: (project) => {
                        const newState = this.state
                        newState.expenses.unshift(project)
                        this.setState(newState)
                    },

                    addNewExpenseToState: (expense) => {
                        const newState = this.state
                        newState.expenses.unshift(expense)
                        this.setState(newState)
                    },

                    addNewEarningToState: (earning) => {
                        const newState = this.state
                        newState.earnings.unshift(earning)
                        this.setState(newState)
                    },

                    clearState: () => {
                        const newState = this.state
                        newState.project.name = ''
                        newState.project.address = ''
                        newState.project.address2 = ''
                        newState.project.city_code = ''
                        newState.project.client_id = ''
                        newState.project.user_id = '5e21fa1183e005ceafe11c16'
                        newState.project.status = false
                        newState.project.started = ''
                        newState.project.finished = ''
                        this.setState(newState)
                    },

                }} >
                {this.props.children}
            </Provider >
        )
    }
}

export { MyProvider }

export default Consumer
