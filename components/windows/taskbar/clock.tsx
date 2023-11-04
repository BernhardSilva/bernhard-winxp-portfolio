import React from 'react';

type ClockProps = {
	currentTime: Date;
};

const Clock = ({ currentTime }: ClockProps) => {
	return (
		<div id='Clock'>
			<div className='text-sm pr-3'>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
		</div>
	);
};

export default Clock;
