import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'
import Close from '../Buttons/Close'
import { CapitalizeFirst } from '../GeneralFunctions/CapitalizeFirst'
import DatePicker from '../DatePicker/DatePicker'
// import { DateFormat } from '../GeneralFunctions/Moment'
import SubmitButton from '../Buttons/SubmitButton'
import Delete from '../Buttons/Delete'

class CreateEarningModal extends Component {

    render() {
        return (
            <Consumer>
                {context => {
                    const { _id: project_id, name } = context.state.project
                    const { category, size, amount, details } = context.state.earning
                    return (
                        <div key={project_id} className='create-earning-container'>
                            <div className='create-earning-card'>
                                <Close close='close-add-earning-modal' />
                                <div className='--ta-center --m-b-20'>Create Expense For <b>{CapitalizeFirst(name)}</b></div>
                                <div className='--grid-2-1fr --m-b-20 --al-it-end'>
                                    <label htmlFor="category">Category: </label>
                                    <input type="text" name="category" className='--ta-right'
                                        onChange={e => context.setStateForEarning(e.target)} value={CapitalizeFirst(category)}
                                    />
                                </div>
                                <div className='--grid-2-1fr --m-b-20 --al-it-end'>
                                    <label htmlFor="amount">Dimensions: </label>
                                    <input type="text" name="size" className='--ta-right'
                                        onChange={e => {
                                            if (e.target.value >= 0 || e.target.value <= 9) context.setStateForEarning(e.target)
                                        }}
                                        value={size}
                                    />
                                </div>
                                <div className='--grid-2-1fr --m-b-20 --al-it-end'>
                                    <label htmlFor="amount">Amount: </label>
                                    <input type="text" name="amount" className='--ta-right'
                                        onChange={e => {
                                            if (e.target.value >= 0 || e.target.value <= 9) context.setStateForEarning(e.target)
                                        }}
                                        value={amount}
                                    />
                                </div>
                                <div className='--grid-2-auto-1fr --min-h-100'>
                                    <label htmlFor="details">Details: </label>
                                    <textarea type="text" name="details" className=''
                                        onChange={e => {
                                            context.setStateForEarning(e.target)
                                        }}
                                        value={CapitalizeFirst(details)}
                                    />
                                </div>
                                <div className='--grid-1 --m-t-20'>
                                    <SubmitButton origin='submit earning' project_id={project_id} />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default CreateEarningModal

    // < label htmlFor = "createdAt" > Paid On: </label > <div className='ap-ad--card-body' ><DatePicker origin='create-earning' /></div>