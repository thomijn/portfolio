import React, { Component } from 'react'
import portrat from '../assets/thomas.jpg'; 

export default class PhotoHeader extends Component {
    render() {
        return (
            <div>
                <div class="photo">
                <img src={portrat} />
                </div>
            </div>
        )
    }
}
