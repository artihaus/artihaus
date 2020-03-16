import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import EarningApi from '../../Utils/Server/Earnings'

class SubmitNewEarningButton extends Component {

    handleSubmit(context) {
        let { amount, category, size, details, status, paidAt, isUploaded } = context.state.earning
        const { _id: project_id } = context.state.project

        // if (name) name = name.toLowerCase()
        // if (address) address = address.toLowerCase()

        const { user_id } = context.getUserCredentials()

        if ( project_id, user_id, amount, category, size, details, status, paidAt ) {
            EarningApi
                .create({
                    project_id,
                    user_id,
                    amount,
                    category,
                    size,
                    details,
                    status,
                    paidAt,
                })
                .then(res => {
                    if (res) context.addNewEarningToState(res.data)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else { window.alert('Create New Earning By Insert New Values!') }
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
                            <button style= {style} type='submit' onClick={() => this.handleSubmit(context)}>Create New Earning</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SubmitNewEarningButton