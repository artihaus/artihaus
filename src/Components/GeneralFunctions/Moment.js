import React from 'react'
import Moment from 'moment'


export const DateFormat = (format, text) => {
    if(format) return Moment(format).format('ddd MMM DD, YYYY')

    return(
        <i><small>{text}</small></i>
    )
}