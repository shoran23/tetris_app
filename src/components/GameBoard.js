import React, { Component } from 'react';
class GameBoard extends Component.React {
    state = {
        squareWidth: '50px',
        squareHeight: '50px',
        yellow: 'yellow',
        blue: 'blue',
        red: 'red',
        green: 'green',
        orange: 'orange',
        shapes: [
            {
                name: 'O',
                color: this.state.yellow,
                squares: ['o-upper-left','o-upper-right','o-lower-left','o-lower-right'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            },
            {
                name: 'I',
                color: this.state.blue,
                squares: ['i-top','i-middle-upper','i-middle-lower','i-bottom'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            },
            {
                name: 'S',
                color: this.state.red,
                squares: ['s-bottom-left','s-middle-bottom','s-middle-top','s-top-left'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            }, 
            {
                name: 'Z',
                color: this.state.green,
                squares: ['z-top-left','z-middle-top','z-middle-bottom','z-bottom-right'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            },
            {
                name: 'L',
                color: this.state.orange,
                squares: []
            }
        ]    
    }    


    render() {
        return (
            <div className='gameboard'>
                
            </div>
        )
    }
}
export default GameBoard;