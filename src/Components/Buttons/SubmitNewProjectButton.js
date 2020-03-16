import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import ProjectApi from '../../Utils/Server/Projects'

class SubmitNewProjectButton extends Component {

    handleSubmit(context) {
        let { name, address, client_name, city_code, started } = context.state.projectToCreate

        client_name = client_name.toLowerCase()
        if (name) name = name.toLowerCase()
        if (address) address = address.toLowerCase()

        const { user_id } = context.getUserCredentials()
        const client_id = context.getClientCredentials({ client_name })
        console.log(name, address, client_id, user_id, city_code, started)

        if (name && address && client_id && user_id && city_code && started) {
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
        else { window.alert('Enter All Inputs')}
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