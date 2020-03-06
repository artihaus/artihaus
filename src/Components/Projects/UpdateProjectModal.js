import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import { DateFormat } from '../GeneralFunctions/Moment'
import UpdateProjectButton from '../Buttons/UpdateProjectButton'
import Delete from '../Buttons/Delete'

import './UpdateProjectModal.css'

class EditProjectModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { project } = context.state
                    let { _id, name, address, city_code, client_id, user_id, status, started, finished } = project
                    return (
                        <div key={_id} className='update-project-container'>
                            <div className='update-project-card'>
                                <Close close='close-update-project-modal'/>
                                <div className='update-project-card--header'>
                                    UPDATE PROJECT
                                </div>
                                <label htmlFor="name">Project Name: </label><input type="text" name="name" onChange={e => context.updateProjectValue( e.target )} value={name} />
                                <label htmlFor="address">Project Address: </label><input type="text" name="address" onChange={e => context.updateProjectValue( e.target )} value={address} />
                                <label htmlFor="city_code">Project City Code: </label><input type="text" name="city_code" onChange={e => context.updateProjectValue( e.target )} value={city_code}  />
                                <label htmlFor="started">Project Status: </label><input type="text" name="status" onChange={e => context.updateProjectValue( e.target )} value={status}  />
                                <label htmlFor="started">Project Started Date: </label><input type="text" name="started" onChange={e => context.updateProjectValue( e.target )} value={DateFormat(started)}  />
                                <label htmlFor="finished">Project Finished Date: </label><input type="text" name="finished" onChange={e => context.updateProjectValue( e.target )} value={finished} placeholder='Enter Finished Date' />
                                <div className='--button-grid-2'>
                                    <UpdateProjectButton  />
                                    <Delete origin='project' />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditProjectModal