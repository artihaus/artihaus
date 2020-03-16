import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

import { DateFormat } from '../GeneralFunctions/Moment'
// import { Status } from '../GeneralFunctions/Status'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import OpenModalButton from '../Buttons/OpenModalButton'
import UpdateEarningModal from './UpdateEarningModal'


class Earnings extends Component {

    state = {}

    getProjectName(project_id, context) {
        const { projects } = context.state
        let project = []
        if (projects) {
            projects.map(projectObj => {
                if (projectObj._id === project_id) {
                    project.push(projectObj)
                }
            })
        }
        return project[0]
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
                                            <div className='ap-ad-earning-grid'>
                                                {
                                                    earnings.map(earning => {

                                                        const { _id, category, amount, project_id, status, createdAt, paidAt } = earning
                                                        const project = this.getProjectName(project_id, context)
                                                        return (
                                                            <div key={_id} className={!status ? '--status-pending ap-ad-earning-card' : 'ap-ad-earning-card'}>
                                                                <div className='--ta-center'>
                                                                    <b>{project && project.name.toUpperCase()}</b>
                                                                </div>
                                                                <div className='--grid-2'>
                                                                    <div className='--ta-left'>{category.toUpperCase()}</div>
                                                                    <div className='--ta-right'>${amount}</div>
                                                                </div>
                                                                <div className='--grid-2-auto'>
                                                                    <div>Completion</div>
                                                                    <div className='--ta-right'>{DateFormat(project && project.finished)}</div>
                                                                </div>
                                                                <div className='--grid-2-auto'>
                                                                    <div className='--ta-left'>{paidAt ? 'Paid On ' : <small>'Pending Payment'</small>}</div>
                                                                    <div className='--ta-right'>{paidAt && DateFormat(paidAt)}</div>
                                                                </div>
                                                                <div className='--grid-1-auto --gap-10'>
                                                                    <OpenModalButton earning={earning} modal={`update-earning${_id}`} origin='Update' />
                                                                </div>
                                                                {
                                                                    whichModalDisplay === `update-earning${_id}` ? <UpdateEarningModal project_name={project.name}/> :''
                                                                }
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