import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

import './Close.css'

class Delete extends Component {

    handleDelete( _id, context ){
        const { projects } = context.state
        ProjectApi
        .remove({
            _id
        })
        .then( res => {
            let index = 0
            projects.forEach( project => {
                if(project._id === _id){
                    delete projects[index]
                    context.updateModalDisplay()
                }
                index++
            })
        })
        .catch( err => console.log( err ))
    }

    render(){
        return(
            <Consumer>
                {(context) => {
                    const { updateProject } = context.state
                    const { _id } = updateProject
                    return(
                        <div>
                            <button type='submit' onClick={ ()=> this.handleDelete(_id, context) }>Delete This Project</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Delete