/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Board from './Board';

import './Game.css';


function calculateWinner(squares) {
    const size = Math.sqrt(squares.length);

    for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
            const index = i * size + j;

            // if (((index < (i + 1) * size - 4) && (squares[index - 1] === null || squares[index + 5] === null) && squares[index] && squares[index] === squares[index + 1] && squares[index] === squares[index + 2] && squares[index] === squares[index + 3] && squares[index] === squares[index + 4])
            //     || ((squares[index - size] === null || squares[index + 5 * size] === null) && squares[index] && squares[index] === squares[index + size * 1] && squares[index] === squares[index + size * 2] && squares[index] === squares[index + size * 3] && squares[index] === squares[index + size * 4])
            //     || ((squares[index - size * 1 - 1] === null || squares[index + size * 5 + 5] === null) && squares[index] && squares[index] === squares[index + size * 1 + 1] && squares[index] === squares[index + size * 2 + 2] && squares[index] === squares[index + size * 3 + 3] && squares[index] === squares[index + size * 4 + 4])
            //     || ((squares[index - size * 1 + 1] === null || squares[index + size * 5 - 5] === null) && squares[index] && squares[index] === squares[index + size * 1 - 1] && squares[index] === squares[index + size * 2 - 2] && squares[index] === squares[index + size * 3 - 3] && squares[index] === squares[index + size * 4 - 4])) {
            //     return {
            //         winLocation: [index, index + 1, index + 2, index + 3, index + 4],
            //         winPlayer: squares[index]
            //     };
            // }

            if (
                index < (i + 1) * size - 4 &&
                (squares[index - 1] === null || squares[index + 5] === null) &&
                squares[index] &&
                squares[index] === squares[index + 1] &&
                squares[index] === squares[index + 2] &&
                squares[index] === squares[index + 3] &&
                squares[index] === squares[index + 4]
            ) {
                return {
                    winLocation: [index, index + 1, index + 2, index + 3, index + 4],
                    winPlayer: squares[index]
                };
            }
            if (
                (squares[index - size] === null ||
                    squares[index + 5 * size] === null) &&
                squares[index] &&
                squares[index] === squares[index + size * 1] &&
                squares[index] === squares[index + size * 2] &&
                squares[index] === squares[index + size * 3] &&
                squares[index] === squares[index + size * 4]
            ) {
                return {
                    winLocation: [
                        index,
                        index + size * 1,
                        index + size * 2,
                        index + size * 3,
                        index + size * 4
                    ],
                    winPlayer: squares[index]
                };
            } if (
                (squares[index - size * 1 - 1] === null ||
                    squares[index + size * 5 + 5] === null) &&
                squares[index] &&
                squares[index] === squares[index + size * 1 + 1] &&
                squares[index] === squares[index + size * 2 + 2] &&
                squares[index] === squares[index + size * 3 + 3] &&
                squares[index] === squares[index + size * 4 + 4]
            ) {
                return {
                    winLocation: [
                        index,
                        index + size * 1 + 1,
                        index + size * 2 + 2,
                        index + size * 3 + 3,
                        index + size * 4 + 4
                    ],
                    winPlayer: squares[index]
                };
            } if (
                (squares[index - size * 1 + 1] === null ||
                    squares[index + size * 5 - 5] === null) &&
                squares[index] &&
                squares[index] === squares[index + size * 1 - 1] &&
                squares[index] === squares[index + size * 2 - 2] &&
                squares[index] === squares[index + size * 3 - 3] &&
                squares[index] === squares[index + size * 4 - 4]
            ) {
                return {
                    winLocation: [
                        index,
                        index + size * 1 - 1,
                        index + size * 2 - 2,
                        index + size * 3 - 3,
                        index + size * 4 - 4
                    ],
                    winPlayer: squares[index]
                };
            }
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(400).fill(null), location: '' }],
            xIsNext: true,
            stepNumber: 0,
            isReverse: false
        };
    }

    reverseHis(isReverse) {
        this.setState({
            isReverse: !isReverse
        });
    }

    restartClick() {
        // eslint-disable-next-line react/destructuring-assignment
        const history = this.state.history.slice();
        const newHistory = history[0];
        const squares = newHistory.squares.slice();

        this.setState({
            history: [{ squares }],
            stepNumber: 0,
            xIsNext: true,
            isReverse: false
        });
    }

    handleClick(i) {
        const { stepNumber } = this.state;
        const { xIsNext } = this.state;
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line react/no-access-state-in-setstate
        // eslint-disable-next-line react/destructuring-assignment
        const history = this.state.history.slice(0, stepNumber + 1);
        const current = history[history.length - 1]; // Get the last element of history
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const size = Math.sqrt(history[0].squares.length);
        const location = [Math.floor(i / size) + 1, (i % size) + 1].join(',');
        squares[i] = xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares, location }]),
            xIsNext: !xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(step) {
        const temp = document.querySelectorAll('.chosen-btn');
        temp.forEach(item => {
            item.classList.remove('chosen-btn');
        });

        document.getElementById(`${step}`).classList.add('chosen-btn');
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }

    render() {
        const { isReverse } = this.state;


        const { history } = this.state;
        const { stepNumber } = this.state;
        const current = history[stepNumber];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        let status;

        if (winner) {
            status = `Winner is: ${winner.winPlayer}`;
        } else {
            const { xIsNext } = this.state;
            status = `Next player is: ${xIsNext ? 'X' : 'O'}`;
        }

        const moves = history.map((step, move) => {
            const desc = move
                ? `Go to move #${move} (${step.location})`
                : 'Go to game start!';
            return (
                <li key={move.id}>
                    <button type="button"
                        style={{ marginTop: 5 }}
                        className="btn btn-sm btn-outline-dark"
                        id={move}
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            );
        });
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={i => this.handleClick(i)}
                        winner={winner && winner.winLocation}
                    />
                </div>
                <div className="game-info">
                    <div className="row">
                        <div className="col-6 status">{status}</div>
                        <div className="col-3">
                            <button
                                className="btn btn-sm btn-outline-success"
                                type="button"
                                onClick={() => this.restartClick()}
                            >
                                Restart
              </button>
                        </div>
                        <div className="col-3">
                            <button type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => this.reverseHis(isReverse)}
                            >
                                Sort step
              </button>
                        </div>
                    </div>
                    <ol reversed={isReverse ? 'reverse' : ''}>
                        {isReverse ? moves.reverse() : moves}
                    </ol>
                </div>
            </div>
        );
    }
}



export default Game;
