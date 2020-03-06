import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

import './Close.css'

class SubmitNewProjectButton extends Component {

    handleSubmit(context) {
        let { name, address, client_name, city_code, started } = context.state.projectToCreate

        if (name) name = name.toLowerCase()
        if (address) address = address.toLowerCase()

        const { user_id } = context.getUserCredentials()
        const client_id = context.getClientCredentials(client_name.toLowerCase(), user_id)
        console.log('CLIENT_ID', client_id)

        if (name && address && client_id && city_code && started && client_id) {
            ProjectApi
                .create({
                    name,
                    address,
                    city_code,
                    client_id,
                    user_id,
                    status: false,
                    started
                })
                .then(res => {
                    if (res) context.addNewProjectToState(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else { window.alert('Create New Project By Insert New Values!') }
    }

    render() {
        const style = {
            marginTop: '32px',
            height: '25px',
        }
        return (
            <Consumer>
                {(context) => {
                    return (
                        <div>
                            <button style= {style} type='submit' onClick={() => this.handleSubmit(context)}>Create New Project</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SubmitNewProjectButton