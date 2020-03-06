/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Artihaus from '../Artihaus/Pages/Artihaus/Artihaus'
import AdminPortal from '../AdminPortal/Pages/AdminPortalDashboard/AdminPortalDashboard'
import _404Page from '../Artihaus/Pages/_404Page/_404Page'

import './routes.css'
// import AdminPortalExpenses from '../Artihaus/Administrator/pages/expenses/expenses_page'

class MainContainer extends Component {
    // getNavBAr(window){
    //     const {pathname} = window.location

    //     if(pathname.includes('/admin')) return ( <AdminNotificationBar/> )
    //     else if(pathname.includes('/renovations')) return ( <RenovationsNotificationBar/> )
    //     else if(pathname.includes('/hardscapes')) return ( <HardscapesNotificationBar/> )
    // <Route exact path='/admin_portal/expenses' component={AdminPortalExpenses} />

    // }

    render() {
        return (
            <BrowserRouter>
                <div className='ap-container'>
                    <Switch>
                        <Route exact path='/' component={Artihaus} />
                        <Route path='/admin-portal' component={AdminPortal} />
                        <Route component={_404Page}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainContainer