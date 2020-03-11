import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import { DateFormat } from '../GeneralFunctions/Moment'
import DatePicker from '../DatePicker/DatePicker'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'

// import ProjectApi from '../../Utils/Server/Projects'
import SubmitNewProjectButton from '../Buttons/SubmitNewProjectButton'

import './AddProjectCard.css'

class AddProjectCard extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { projectToCreate } = context.state
                    let { name, address, city_code, client_name, started } = projectToCreate

                    return (
                        <div className='ap-ad--grid--card'>
                            <div>
                                <div className='ap-ad--card-body --header'><input type="text" name="name" onChange={e => context.createNewProject( e.target )} value={name.toUpperCase()} placeholder='NEW PROJECT NAME'/></div>
                                <div className='ap-ad--card-body --header' ><input type="text" name="client_name" onChange={e => context.createNewProject( e.target )} value={CapitalizeFirst(client_name)} placeholder='Project Client'/></div>
                                <div className='ap-ad--card-body' ><input type="text" name="address" onChange={e => context.createNewProject( e.target )} value={CapitalizeFirst(address)} placeholder='Project Address'/></div>
                                <div className='ap-ad--card-body' ><input type="text" name="city_code" onChange={e => context.createNewProject( e.target )} value={city_code}  placeholder='Project City Code'/></div>
                                <div className='ap-ad--card-body --create-project-date-picker' ><DatePicker origin='create-project'/></div>

                                <div className='ap-ad--card--button' ><SubmitNewProjectButton /></div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddProjectCard