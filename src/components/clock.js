import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';

class Clock extends Component{

    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }

    render(){
        return(
            <div>
                <h1>{ this.props.time }</h1>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return{
        //clock is from reducers/index.js
        time: state.clock.currentTime
    };
}

//the obj from mapStateToProps now get added to props
//first tick is name, second tick is method
export default connect(mapStateToProps, {tick: tick})(Clock);