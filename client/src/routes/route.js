/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import AdminPortal from '../AdminPotal/Pages/AdminPortalDashboard/AdminPortalDashboard'
import Artihaus from '../Artihaus/Pages/ArtihausDashboard/ArtihausDashboard'
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
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Artihaus} />
                        <Route path='/admin_portal' component={AdminPortal} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainContainer