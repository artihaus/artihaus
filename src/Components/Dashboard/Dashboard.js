import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Consumer from '../../Utils/ContextApi/MyProvider'


class Dashboard extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    // const { dashboard } = context.state
                    // if( dashboard ){
                        return (
                            <div className='ap-ad-admin-portal'>
                                    <div className='ap-ap-dashboardsidenav'>
                                        <ul className='ap-ap-dashboard' >
                                            <Link to='/admin-portal/email' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/email-icon.svg')} alt='email link icon' />Email</Link>
                                            <Link to='/admin-portal/chat' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/chat-icon.svg')} alt='chat link icon' />Chat</Link>
                                            <Link to='/admin-portal/contacts' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/contact-icon.svg')} alt='contact link icon' />Contacts</Link>
                                            <Link to='/admin-portal/agenda' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/agenda-icon.svg')} alt='agenda link icon' />Agenda</Link>
                                            <Link to='/admin-portal/notes' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/notes-icon.svg')} alt='notes link icon' />Notes</Link>
                                            <Link to='/admin-portal/todo' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/todo-icon.svg')} alt='to do link icon' />ToDo</Link>
                                            <Link to='/admin-portal/projects' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/project-icon.svg')} alt='project link icon' />Projects</Link>
                                            <Link to='/admin-portal/expenses' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/expense-icon.svg')} alt='expense link icon' />Expenses</Link>
                                            <Link to='/admin-portal/earnings' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/earning-icon.svg')} alt='earning link icon' />Earnings</Link>
                                            <Link to='/admin-portal/invoice' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/invoice-icon.svg')} alt='invoice link icon' />Invoice</Link>
                                            <Link to='/admin-portal/maps' onClick={()=> context.handleDashboard()}><img src={require('../../Assets/Images/map-icon.svg')} alt='map link icon' />Maps</Link>
                                        </ul>
                                    </div>
                                </div>
                        )
                    // }
                }}
            </Consumer >
        )
    }

}
export default Dashboard