import React from 'react';
import { connect } from 'react-redux'

function HelloRedux(state) {
    return (
        <div className="hello">
            {state.value}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

export default connect(
    mapStateToProps
)(HelloRedux);