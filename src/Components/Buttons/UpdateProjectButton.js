import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

import './Close.css'

class Delete extends Component {

    handleUpdate( context ){
        const { updateProject } = context.state
        ProjectApi
        .update( updateProject )
        .then( res => {
            context.updateModalDisplay()
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
                            <button type='submit' onClick={ ()=> this.handleUpdate( context ) }>Update This Project</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Delete