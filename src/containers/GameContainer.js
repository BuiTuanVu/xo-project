import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickSquare, jumpTo, sort, restart } from '../actions/index';
import Game from '../components/Game';

const GameContainer = class extends React.PureComponent {
    render() {
        const { history } = this.props;
        const { xIsNext } = this.props;
        const { stepNumber } = this.props;
        const { isReverse } = this.props;
        // eslint-disable-next-line no-shadow
        const { clickSquare } = this.props;
        // eslint-disable-next-line no-shadow
        const { jumpTo } = this.props;
        // eslint-disable-next-line no-shadow
        const { sort } = this.props;
        // eslint-disable-next-line no-shadow
        const { restart } = this.props;
        return (
            <Game history={history}
                xIsNext={xIsNext}
                stepNumber={stepNumber}
                isReverse={isReverse}
                clickSquare={clickSquare}
                jumpTo={jumpTo}
                sort={sort}
                restart={restart}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber,
    isReverse: state.isReverse,
})

const mapDispatchToProps = (dispatch) => ({
    clickSquare: (id) => dispatch(clickSquare(id)),
    jumpTo: (id) => dispatch(jumpTo(id)),
    sort: () => dispatch(sort()),
    restart: () => dispatch(restart())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)