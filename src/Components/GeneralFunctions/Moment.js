import React from 'react'
import Moment from 'moment'


export const DateFormat = (format) => {
    if(format) return Moment(format).format('ddd MMMM DD, YYYY')

    return(
        <i><small>Undergoing</small></i>
    )
}