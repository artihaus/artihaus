import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

import './Close.css'

class UpdateProjectButton extends Component {

    handleUpdate( context ){
        const { project } = context.state
        ProjectApi
        .update( project )
        .then( res => {
            context.updateStateOfProjects( project )
            context.modalDisplay('close')
        })
        .catch( err => {
            console.log(err)
        })
    }

    render(){
        return(
            <Consumer>
                {(context) => {
                    return(
                        <div>
                            <button type='submit' onClick={ ()=> {
                                this.handleUpdate( context )
                            }}>Update This Project</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default UpdateProjectButton