import React, { Component } from 'react';
import Square from './components/Square.js';

class Shape extends Component.React {
    state = {
        name: this.props.name,
        index: this.props.shapeId,
        type: this.props.shapeType
    }
    render() {
        return (
            <div className={`shape-${name}`} id={`shape-${this.state.index}`}>
                {this.state.type.squares.map((square,index) => (
                    <Square 
                        color={this.state.type.color}
                        width={this.state.type.width}
                        height={this.state.type.height}
                        id={index}
                    />
                ))}
            </div>
        )
    }
}
export default Shape;