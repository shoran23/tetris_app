import React, { Component } from 'react';

class Square extends Component.React {
    render() {
        return (
            <div 
                className='square'
                id={this.props.id}
                style={`color:${this.props.color}`}
                style={`width:${this.props.width}`}
                style={`height:${this.props.height}`}
            >
            </div>
        )
    }
}
export default Square;
