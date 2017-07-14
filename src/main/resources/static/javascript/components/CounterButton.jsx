import React from 'react';
import {connect} from 'react-redux';
import {incrementCount} from '../actions';

class CounterButton extends React.Component {

    render() {
        return (
            <div style={{margin:"100px"}}>
                <input type="button" value={this.props.count} onClick={this.props.incrementCount}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => {
            dispatch(incrementCount());
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(CounterButton);
