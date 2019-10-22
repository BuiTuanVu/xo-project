import React from 'react';
import Board from './Board';
import './Game.css';
import { calculateWinner } from '../reducers/index'



const Game = class extends React.PureComponent {
    render() {
        const { history } = this.props;
        const { stepNumber } = this.props;
        const { xIsNext } = this.props;
        const { isReverse } = this.props;
        const { restart } = this.props;
        const current = history[stepNumber];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        let status;

        if (winner) {

            status = `Winner is: ${winner.winPlayer}`;

        } else {

            status = `Next player is: ${xIsNext ? 'X' : 'O'}`;
        }


        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move} (${step.location})` : 'Go to game start!';
            return (
                <li key={move.id} >
                    <button type="button" style={{ marginTop: 5 }} className="btn btn-sm btn-outline-dark" id={move} onClick={() => this.props.jumpTo(move)}>{desc}</button>
                </li>
            );
        })
        return (
            <div className="game">

                <div className="game-board">
                    <Board squares={squares} onClick={(i) => this.props.clickSquare(i)} winner={winner && winner.winLocation} />
                </div>
                <div className="game-info">
                    <div className="row">
                        <div className="col-6 status">
                            {status}
                        </div>
                        <div className="col-3">
                            <button className="btn btn-sm btn-outline-success" type="button" onClick={() => restart()}>Restart</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => this.props.sort()}>Sort step</button>
                        </div>
                    </div>
                    <ol reversed={isReverse ? 'reverse' : ''}>{isReverse ? moves.reverse() : moves}</ol>

                </div>
            </div>
        );
    }
}

export default Game;