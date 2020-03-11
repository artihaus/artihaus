import React, { Component } from 'react'

import AdminPortalDashboardHeader from '../Components/Header/Header'
import AdminPortalDashboardSubHeader from '../Components/SubHeader/SubHeader'
import DashBoard from '../Components/Dashboard/Dashboard'

import { DateFormat } from '../Components/GeneralFunctions/Moment'
import { Status } from '../Components/GeneralFunctions/Status'
import { CapitalizeFirst } from '../Components/GeneralFunctions/CapitalizeFirst'
import CreateProjectCard from '../Components/Projects/CreateProjectCard'
import UpdateProjectModal from '../Components/Projects/UpdateProjectModal'
import CreateExpenseModal from '../Components/Expenses/CreateExpenseModal'
import CreateEarningModal from '../Components/Earnings/CreateEarningModal'
import OpenModalButton from '../Components/Buttons/OpenModalButton'

import { MyProvider } from '../Utils/ContextApi/MyProvider'
import Consumer from '../Utils/ContextApi/MyProvider'


import Projects from '../Components/Projects/Projects'
import Expenses from '../Components/Expenses/Expenses'
import Earnings from '../Components/Earnings/Earnings'

// import Expenses from '../Components/Expenses/Expenses'
// import Earnings from '../Components/Earnings/Earnings'


class Container extends Component {

    render() {
        const { pathname } = this.props.history.location
        return (
            <MyProvider>
                <AdminPortalDashboardHeader />
                <AdminPortalDashboardSubHeader />
                <Consumer>
                    {context => {
                        const { dashboard } = context.state
                        return (
                            <div className='--container-grid'>
                                <div className={ dashboard ? '--container-dasboard-active' : '--container-dasboard'}><DashBoard /></div>
                                {
                                    pathname === '/admin-portal/projects' ?
                                        <Projects />
                                        :
                                        pathname === '/admin-portal/expenses' ?
                                        <Expenses />
                                        :
                                        pathname === '/admin-portal/earnings' ?
                                        <Earnings />
                                        :
                                        <span />
                                }
                            </div>
                        )
                    }}
                </Consumer>
            </MyProvider >
        )
    }

}
export default Container