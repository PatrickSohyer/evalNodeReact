import React, { Component } from 'react';
import '../css/HeaderImg.css'

class HeaderImg extends Component {
    render() {
        return (
            <div className="headerImg text-center">
                <img src={'./../images/headerImg.jpg'} alt="" />
            </div>
        )
    }
}

export { HeaderImg };