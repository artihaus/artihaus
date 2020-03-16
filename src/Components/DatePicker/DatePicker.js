import React, { Component } from 'react'
import Consumer from '../../Utils/ContextApi/MyProvider'
import { DateFormat } from '../GeneralFunctions/Moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import './DatePicker.css'
import { invalid } from 'moment'

class DatePickerComponent extends Component {

  render() {
    return (
      <Consumer>

        {context => {
          return (
            <div className='--date-picker-grid'>
              <div className='--date-picker-date-display'>
              {
                this.props.origin === 'create-project' ? DateFormat(context.state.projectToCreate.started) :
                this.props.origin === 'create-expense' ? DateFormat(context.state.expense.createdAt):
                this.props.origin === 'create-earning' ? DateFormat(context.state.earning.paidAt):
                <span/>
              }
              </div>
              <div className='--date-picker'>
                <img src={require('../../Assets/Images/date-picker-icon.svg')} alt='date picker' />
                <DatePicker
                  onChange={e => {
                    if (this.props.origin === 'create-expense') {
                      context.createNewExpense({ name: 'createdAt', value: e })
                    }
                    if (this.props.origin === 'create-project') {
                      context.createNewProject({ name: 'started', value: e })
                    }
                    if (this.props.origin === 'create-earning') {
                      context.setStateForEarning({ name: 'paidAt', value: e })
                    }
                  }} />
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default DatePickerComponent