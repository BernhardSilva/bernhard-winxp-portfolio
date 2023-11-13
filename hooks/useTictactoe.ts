import { useEffect, useState } from 'react';

export const useTictactoe = () => {
	const initialScoreValue = { X: 0, O: 0 };
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [score, setScore] = useState<{ [key: string]: number }>(initialScoreValue);
	const [status, setStatus] = useState<string>('');

	const handleClick = (i: number) => {
		const boardCopy = [...board];
		if (calculateWinner(board) || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	const resetGame = () => {
		setScore(initialScoreValue);
		setBoard(Array(9).fill(null));
		setXIsNext(true);
	};

	const calculateWinner = (board: string[]) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	useEffect(() => {
		const resetMatch = () => {
			setTimeout(() => {
				setStatus('Next player: ' + (xIsNext ? '❌' : '🔵'));
				setBoard(Array(9).fill(null));
				setXIsNext(true);
			}, 4000);
		};
		const winner = calculateWinner(board);
		if (winner) {
			setStatus(`Winner: ${winner === 'X' ? '❌' : '🔵'}`);
			setScore((score) => ({ ...score, [winner]: score[winner] + 1 }));
			resetMatch();
		} else if (board.every((cell) => cell !== null)) {
			setStatus("It's a draw!");
			resetMatch();
		} else {
			setStatus('Next player: ' + (xIsNext ? '❌' : '🔵'));
		}
	}, [board, xIsNext]);

	return { board, xIsNext, score, handleClick, resetGame, status };
};
