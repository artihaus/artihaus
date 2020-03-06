import React, { Component } from 'react'

class Artihaus extends Component{

    componentDidMount(){
        localStorage.clear('gui')
        const gui = {
            user_id: '5e21fa1183e005ceafe11c16',
            name: 'tarciso loiola',
            user_right: 'admin'
        }
        localStorage.setItem('gui', JSON.stringify(gui))
    }

    render(){
        return(
            <div>Welcome to Artihaus Dashboard!</div>
        )
    }

}
export default Artihaus