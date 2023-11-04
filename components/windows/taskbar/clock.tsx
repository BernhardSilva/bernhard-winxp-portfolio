import React from 'react';

type ClockProps = {
	currentTime: Date;
	className?: string;
};

const Clock = ({ currentTime, className }: ClockProps) => {
	return (
		<div id='Clock'>
			<div className={`text-sm pr-3 ${className}`}>
				{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
			</div>
		</div>
	);
};

export default Clock;
