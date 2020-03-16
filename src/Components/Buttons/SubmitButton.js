import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import EarningApi from '../../Utils/Server/Earnings'

import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'

class SubmitButton extends Component {

    handleSubmit(origin, project_id, context) {
        switch (origin) {
            case 'Submit Earning': {
                const { user_id } = context.getUserCredentials()
                let { category, amount, size, details } = context.state.earning
                if(category && amount && size && details) {
                    EarningApi
                    .create({
                        project_id,
                        user_id,
                        amount,
                        category,
                        size,
                        details,
                        status: false,
                    })
                    .then(res => {
                        if (res) {
                            context.addEarningToContext(res.data)
                            context.modalDisplay('none')
                            context.clear('earning')
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })}
                break;
            }
            default: {
                break;
            }
        }
        // const { _id: project_id } = context.state.project

        // if (name) name = name.toLowerCase()
        // if (address) address = address.toLowerCase()


        // if ( project_id, user_id, amount, category, size, details, status, paidAt ) {
        //     EarningApi
        //         .create({
        //             project_id,
        //             user_id,
        //             amount,
        //             category,
        //             size,
        //             details,
        //             status,
        //             paidAt,
        //         })
        //         .then(res => {
        //             if (res) context.addNewEarningToState(res.data)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }
        // else { window.alert('Create New Earning By Insert New Values!') }
    }

    render() {
        const style = {
            // marginTop: '32px',
            // height: '25px',
        }
        return (
            <Consumer>
                {(context) => {
                    const origin = CapitalizeFirst(this.props.origin)
                    const project_id = this.props.project_id
                    return (
                        <div>
                            <button style={style} type='submit' onClick={() => this.handleSubmit(origin, project_id, context)}>{origin}</button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SubmitButton