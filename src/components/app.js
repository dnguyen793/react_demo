import React, {Component} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Cell from '../components/cell/cell';


class App extends Component {

    constructor( props ){
        super( props );
        this.state = {
            cellContents: ['','','','','','','','','']
        }
        this.handleChildClick = this.handleChildClick.bind(this);
        this.cellCharacters = ['x', 'o'];
        this.currentCellCharacter = 0;
    }

    toogleCharacter(){
        this.currentCellCharacter = 1 - this.currentCellCharacter;
    }

    handleChildClick( childIndex ){
        console.log("child clicked");
        const currentContents = this.state.cellContents.slice()
        currentContents[childIndex] = this.cellCharacters[this.currentCellCharacter];
        this.setState({
            cellContents: currentContents
        });
        this.toogleCharacter();
    }

    makeCells(){
        const cells = [];
        let count = 0;

        var sizeDimension = {
            cellHeight: 100/this.props.dimension.col + '%',
            cellWidth: 100/this.props.dimension.row + '%'
        }

        for(let rowI = 0; rowI < this.props.dimension.row; rowI++){
            for(let colI = 0; colI < this.props.dimension.col; colI++){
                cells.push( <Cell clickHandler = { this.handleChildClick } key={ count } dimension = { sizeDimension } index={ count } text={ this.state.cellContents[count] } />);
                count++;
            }
        }
        return cells;
    }

    render(){
        const height = {
            height: '60vh'
        }

        return(
            <div style={ height }>
                <div className="app">
                    <img src={logo} className="logo rotate"/>
                </div>
                { this.makeCells() }
            </div>
        )
    }
};

export default App;
