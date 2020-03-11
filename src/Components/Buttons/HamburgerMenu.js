import React, { Component } from 'react'

import Provider from '../../Utils/ContextApi/MyProvider'


class HamMenu extends Component {

    state = {
        className: false
    }

    toggleClass() {

        this.setState({ className: !this.state.className })
    }

    render() {
        return (
            <Provider>
                {
                    context => {
                        return (
                            <div onClick={() => {
                                this.toggleClass()
                                context.handleDashboard()
                            }}
                                className={this.state.className ? '--hamburger-menu-clicked' : '--hamburger-menu'}
                            >
                                <div className='--hamburger-menu-icon --ham-1'></div>
                                <div className='--hamburger-menu-icon --ham-2'></div>
                                <div className='--hamburger-menu-icon --ham-3'></div>
                            </div>
                        )
                    }
                }
            </Provider>
        )
    }
}

export default HamMenu