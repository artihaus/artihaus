import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AdminPortalDashboardHeader from '../../../Components/Header/Header'
import AdminPortalDashboardSubHeader from '../../../Components/SubHeader/SubHeader'

import { MyProvider } from '../../../Utils/ContextApi/MyProvider'

import './AdminPortalDashboard.css'

import Projects from '../../../Components/Projects/Projects'
import Expenses from '../../../Components/Expenses/Expenses'

class AdminPortalDashboard extends Component {

    state = {
        display: ''
    }

    render() {
        return (
            <MyProvider>
                <AdminPortalDashboardHeader />
                <AdminPortalDashboardSubHeader />

                <div className='ap-ad-admin-portal'>
                    <div className='ap-ap-dashboard' >
                        <div className='ap-ap-dashboardsidenav'>
                            <ul>
                                <li onClick={ () => { this.setState({ display: 'Email' })}}><img src={require('../../../Assets/Images/email-icon.svg')} alt='email link icon' />Email</li>
                                <li onClick={ () => { this.setState({ display: 'Chat' })}}><img src={require('../../../Assets/Images/chat-icon.svg')} alt='chat link icon' />Chat</li>
                                <li onClick={ () => { this.setState({ display: 'Contacts' })}}><img src={require('../../../Assets/Images/contact-icon.svg')} alt='contact link icon' />Contacts</li>
                                <li onClick={ () => { this.setState({ display: 'Agenda' })}}><img src={require('../../../Assets/Images/agenda-icon.svg')} alt='agenda link icon' />Agenda</li>
                                <li onClick={ () => { this.setState({ display: 'Notes' })}}><img src={require('../../../Assets/Images/notes-icon.svg')} alt='notes link icon' />Notes</li>
                                <li onClick={ () => { this.setState({ display: 'ToDos' })}}><img src={require('../../../Assets/Images/todo-icon.svg')} alt='to do link icon' />ToDos</li>
                                <li onClick={ () => { this.setState({ display: 'Projects' })}}><img src={require('../../../Assets/Images/project-icon.svg')} alt='project link icon' onClick={() => { this.setState({ menu: 'projects' }) }} />Projects</li>
                                <li onClick={ () => { this.setState({ display: 'Expenses' })}}><img src={require('../../../Assets/Images/expense-icon.svg')} alt='expense link icon' />Expenses</li>
                                <li onClick={ () => { this.setState({ display: 'Earnings' })}}><img src={require('../../../Assets/Images/earning-icon.svg')} alt='earning link icon' />Earnings</li>
                                <li onClick={ () => { this.setState({ display: 'Invoice' })}}><img src={require('../../../Assets/Images/invoice-icon.svg')} alt='invoice link icon' />Invoice</li>
                                <li onClick={ () => { this.setState({ display: 'Maps' })}}><img src={require('../../../Assets/Images/map-icon.svg')} alt='map link icon' /> Maps</li>
                            </ul>
                        </div>
                    </div>
                    {
                        this.state.display === 'Projects' ? <Projects /> :
                        this.state.display === 'Expenses' ? <Expenses /> :
                        this.state.display === 'Earnings' ? <Projects /> :
                        <span />
                    }
                </div>
            </MyProvider >
        )
    }

}
export default AdminPortalDashboard