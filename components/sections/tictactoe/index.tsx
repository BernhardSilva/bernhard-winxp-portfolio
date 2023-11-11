import { useState } from 'react';

const TicTacToe = () => {
	const initialScoreValue = { X: 0, O: 0 }
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [score, setScore] = useState<{ [key: string]: number }>(initialScoreValue);

	const handleClick = (i: number) => {
		const boardCopy = [...board];
		if (calculateWinner(board) || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	const resetMatch = () => {
		setBoard(Array(9).fill(null));
		setXIsNext(true);
	};
	const resetGame = () => {
		setScore(initialScoreValue)
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

	const winner = calculateWinner(board);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
		setScore({ ...score, [winner]: score[winner] + 1 });
		resetMatch();
	} else {
		status = 'Next player: ' + (xIsNext ? '❌' : '🔵');
	}

	return (
		<div className='grid place-items-center h-full'>
			<div className='border-2 p-10 rounded-2xl'>
				<h1 className='text-3xl font-bold mb-4'>Tic Tac Toe</h1>
				<div className='mb-4'>
					<h2 className='text-xl'>{status}</h2>
				</div>
				<div className='flex ml-20'>
					<div className='grid grid-cols-3 gap-2'>
						{board.map((value, i) => (
							<button
								key={i}
								onClick={() => handleClick(i)}
								className={`w-16 h-16 bg-gray-700 rounded text-2xl ${!value && 'hover:bg-gray-600'}`}
							>
								{value === 'X' ? '❌' : value === 'O' ? '🔵' : null}
							</button>
						))}
					</div>
					<div className='ml-4'>
						<div className='border-2 p-2 rounded-2xl'>
							<h2 className='text-xl mb-2'>Score</h2>
							<p>❌: {score.X}</p>
							<p>🔵: {score.O}</p>
						</div>
					</div>
				</div>
				<button onClick={resetGame} className='mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 hover:cursor-pointer'>
					<span className='text-white'>Reset game</span>
				</button>
			</div>
		</div>
	);
};

export default TicTacToe;
