import React, { Component } from 'react'

import Consumer from '../../Utils/ContextApi/MyProvider'

class Close extends Component {

    render(){
        return(
            <Consumer>
                {(context) => {
                    return(
                        <div className='close-button' onClick={ () =>{
                            context.modalDisplay('close')
                        }}>
                            <img src={require('../../Assets/Images/close-icon.svg')} alt='close icon'/>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Close