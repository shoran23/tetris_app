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
        pink: 'pink',
        purple: 'purple',
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
                squares: ['l-top','l-middle-top','l-middle-bottom','bottom','bottom-right'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            },
            {
                name: 'J',
                color: this.state.pink,
                squares: ['j-top','j-middle-top','j-middle-bottom','bottom','bottom-left'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
            },
            {
                name: 'T',
                color: this.state.purple,
                squares: ['t-top-left','t-top-middle','t-top-right','bottom'],
                width: this.state.squareWidth,
                height: this.state.squareHeight
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