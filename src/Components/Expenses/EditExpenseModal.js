import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import UpdateProjectButton from '../Buttons/UpdateProjectButton'
import { DateFormat } from '../GeneralFunctions/Moment'

import ProjectApi from '../../Utils/Server/Projects'


class EditProjectModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { updateProject } = context.state
                    let { name, address, city_code, client_id, user_id, status, started, finished } = updateProject

                    return (
                        <div className='edit-project-container'>
                            <div className='edit-project-card'>
                                <Close />
                                <div className='edit-project-card--header'>
                                    UPDATE PROJECT
                                </div>
                                <label htmlFor="name">Project Name: </label><input type="text" name="name" onChange={e => context.updateProjectValue( e.target )} value={name} /><br />
                                <label htmlFor="address">Project Address: </label><input type="text" name="address" onChange={e => context.updateProjectValue( e.target )} value={address} /><br />
                                <label htmlFor="city_code">Project City Code: </label><input type="text" name="city_code" onChange={e => context.updateProjectValue( e.target )} value={city_code}  /><br />
                                <label htmlFor="started">Project Status: </label><input type="text" name="status" onChange={e => context.updateProjectValue( e.target )} value={status}  /><br />
                                <label htmlFor="started">Project Started Date: </label><input type="text" name="started" onChange={e => context.updateProjectValue( e.target )} value={DateFormat(started)}  /><br />
                                <label htmlFor="finished">Project Finished Date: </label><input type="text" name="finished" onChange={e => context.updateProjectValue( e.target )} value={finished ? finished : 'Enter Finished Date'}  /><br />

                                <UpdateProjectButton />
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditProjectModal