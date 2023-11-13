import { useTictactoe } from '@/hooks/useTictactoe';

const TicTacToe = () => {
	const { board, handleClick, score, resetGame, status } = useTictactoe();

	return (
		<div className='grid place-items-center h-full'>
			<div className='p-10 rounded-2xl bg-slate-200 dark:bg-slate-800 border-2 border-slate-600'>
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
						<div className='border-2 border-slate-600 p-2 rounded-2xl'>
							<h2 className='text-xl mb-2'>Score</h2>
							<p>❌: {score.X}</p>
							<p>🔵: {score.O}</p>
						</div>
					</div>
				</div>
				<button
					onClick={resetGame}
					className='mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 transition duration-300 hover:scale-105 hover:cursor-pointer'
				>
					<span className='text-white'>Reset game</span>
				</button>
			</div>
		</div>
	);
};

export default TicTacToe;
