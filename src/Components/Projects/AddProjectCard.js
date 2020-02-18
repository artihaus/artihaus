import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import { DateFormat } from '../GeneralFunctions/Moment'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'

import ProjectApi from '../../Utils/Server/Projects'
import AddProjectButton from '../Buttons/AddProjectButton'

import './AddProjectCard.css'

class AddProjectCard extends Component {

    handleSubmit(project, clients) {
        project.name = project.name.toLowerCase()
        project.address = project.address.toLowerCase()
        project.client_id = project.client_id.toLowerCase()
        
        clients.forEach( client => {
            if(client.name === project.client_id.toLowerCase()) {
                project.client_id = client._id
            }
        })
        ProjectApi
        .create( project )
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Consumer>
                {context => {
                    const { newProject, clients } = context.state
                    let { name, address, city_code, client_id, user_id, status, started, finished } = newProject

                    return (
                        <div className='ap-ad--grid--card'>
                            <div>
                                <div className='ap-ad--card-body --header'><input type="text" name="name" onChange={e => context.newProjectCreate( e.target )} value={name.toUpperCase()} placeholder='NEW PROJECT NAME'/></div>
                                <div className='ap-ad--card-body --header' ><input type="text" name="client_id" onChange={e => context.newProjectCreate( e.target )} value={CapitalizeFirst(client_id)} placeholder='Project Client'/></div>
                                <div className='ap-ad--card-body' ><input type="text" name="address" onChange={e => context.newProjectCreate( e.target )} value={CapitalizeFirst(address)} placeholder='Project Address'/></div>
                                <div className='ap-ad--card-body' ><input type="text" name="city_code" onChange={e => context.newProjectCreate( e.target )} value={city_code}  placeholder='Project City Code'/></div>
                                <div className='ap-ad--card-body' ><input type="text" name="started" onChange={e => context.newProjectCreate( e.target )} value={started}  placeholder='Project Started Date'/></div>

                                <div className='ap-ad--card--button' ><AddProjectButton /></div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddProjectCard