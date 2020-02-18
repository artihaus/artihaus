import React from 'react'
import './status.css'

export const Status = ( status ) => {
    switch (status) {
        case false:
            return (
                <div className='--progress_bar'>
                            <div className='start_progress'></div>
                            <div className='half_1_progress'></div>
                            <div className='half_2_progress'></div>
                            <div className={status === true ? 'half_3_progress done' : 'half_3_progress red'}></div>
                            <div className={status === true ? 'half_4_progress done' : 'half_4_progress red'}></div>
                            <div className={status === true ? 'finish_progress done' : 'finish_progress red'}></div>
                        </div>
            )
    }
}