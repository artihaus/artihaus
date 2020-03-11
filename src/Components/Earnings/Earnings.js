import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
// import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import OpenModalButton from '../Buttons/OpenModalButton'

import './Earnings.css'

class Earnings extends Component {

    state = {}

    getProjectName(project_id, context) {
        const { projects } = context.state
        let project_name = 'No Project Name'
        if (projects) {
            projects.map(project => {
                if (project._id === project_id) {
                    project_name = project.name
                }
            })
        }
        return project_name
    }

    render() {
        return (
            <Consumer>
                {(context) => {
                    const { projects, earnings, whichModalDisplay } = context.state
                    if (earnings) {
                        return (
                            <div>
                                <div className='ap-ad--container'>
                                    {
                                        earnings.length ?
                                            <div>
                                                {
                                                    earnings.map(earning => {

                                                        const { _id: earning_id, category, project_id } = earning
                                                        const project_name = this.getProjectName(project_id, context)
                                                        return (
                                                            <div key={earning_id}>
                                                                <div>
                                                                    {project_name}
                                                                </div>
                                                                <div>
                                                                    {category}
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            <div />
                                    }
                                </div>
                            </div>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Earnings

/*

*/