import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class AdminPortalDashboardHeader extends Component {

    render() {
        return (
                <div className='ap-ad-header'>
                    <Link to="/admin-portal" alt='Home Link' className='ap-ad-header--artihaus'><img src={require('../../Assets/Images/artihaus.svg')} alt='home logo'/></Link>

                    <ul className='ap-ad-header--nav'>
                        <li>
                            <Link to="/admin-portal" alt='Home Link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/admin-portal/support" alt='Home Link'>Support</Link>
                        </li>
                        <li>
                            <Link to="/admin-portal/about" alt='Home Link'>About Us</Link>
                        </li>
                    </ul>
                </div>
        )
    }

}
export default AdminPortalDashboardHeader