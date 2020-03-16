import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import SubmitButton from '../Buttons/SubmitButton'
import Delete from '../Buttons/Delete'
import { DateFormat } from '../GeneralFunctions/Moment'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'


class UpdateEarningModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const project_name = this.props.project_name
                    let { _id, category, amount, size, status } = context.state.earning
                    return (
                        <div key={_id} className='update-earning-container'>
                            <div className='update-earning-card'>

                                <Close close='update-earning' />

                                <div className='--ta-center --m-b-20'>
                                    UPDATE EARNING FOR <b>{project_name.toUpperCase()}</b>
                                </div>
                                <div className='--grid-2-auto-1fr --m-b-20'>
                                    <label htmlFor="name">Category: </label>
                                    <input type="text" name="category" className='--ta-right'
                                        onChange={e => context.setStateForEarning(e.target)} value={CapitalizeFirst(category)}
                                    />
                                </div>
                                <div className='--grid-2-auto-1fr --m-b-20'>
                                    <label htmlFor="name">Size: </label>
                                    <input type="text" name="size" className='--ta-right'
                                    onChange={e => context.setStateForEarning(e.target)} value={size}
                                    />
                                </div>
                                <div className='--grid-2-auto-1fr --m-b-20'>
                                    <label htmlFor="name">Amount: </label>
                                    <input type="text" name="amount" className='--ta-right'
                                    onChange={e => context.setStateForEarning(e.target)} value={amount}
                                    />
                                </div>

                                <input type="radio" name="status" onChange={e => context.setStateForEarning(e.target)} value={true} /><label htmlFor="true">Status Resolved</label><br />

                                <div className='--grid-2-auto --gap-10 --m-t-20'>
                                    <SubmitButton origin='update earning' />
                                    <Delete origin='earning' />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default UpdateEarningModal