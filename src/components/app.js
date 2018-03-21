import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './button';
// import Box from './box';
import { genRandomColor, genRandomPos } from "../helpers";
//index.js is the main file for the folder so you dont need to include the name in the path
import BoxContainer from './boxContainer';


class App extends Component {
    constructor( props ){
        super( props );
        this.state = {
            boxes: [
                {
                    color: 'red',
                    pos: genRandomPos()
                },
                {
                    color: 'blue',
                    pos: genRandomPos()
                },
                {
                    color: 'green',
                    pos: genRandomPos()
                },
                {
                    color: 'orange',
                    pos: genRandomPos()
                },
                {
                    color: 'purple',
                    pos: genRandomPos()
                },
                {
                    color: 'lightpink',
                    pos: genRandomPos()
                }

            ]
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor( index ) {

        const newBoxes = this.state.boxes.slice();
        newBoxes[index].color = genRandomColor();
        newBoxes[index].pos = genRandomPos();

        this.setState({
            boxes: newBoxes
        });

        // this.setState({
        //     box: genRandomColor()
        // });
    }

    render(){

        const boxElements = this.state.boxes.map( ( item, index )=>{
            return (
                <BoxContainer key = {index} pos = {item.pos} newColor = { ()=> this.changeColor( index )} color = {item.color}/>

                /*<div key = {index}>*/
                    /*<Button updateColor = { () => this.changeColor(index) } />*/
                    /*<Box color = {item.color} />*/
                /*</div>*/
            )
        });


        return (
            <div className="container">
                <h1 className="text-center my-3">Components Demo</h1>
                { boxElements }

            </div>
        );
    }
}

export default App;

//you can't have 2 sibling (box and btn) to talk directly to each other
// /*<Button updateColor = {this.changeColor} />*/
// /*<Box color = {this.state.boxes} />*/