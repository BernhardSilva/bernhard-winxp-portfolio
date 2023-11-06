interface DivSectionHandlerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const DivSectionHandler = ({
	className,
	onClick,
	onDoubleClick,
	onMouseDown,
	content,
	...props
}: DivSectionHandlerProps) => {
	return (
		<div
			onClick={onClick}
			onDoubleClick={onDoubleClick}
			onMouseDown={onMouseDown}
			className={`absolute ${className}`}
			{...props}
		>
			{content}
		</div>
	);
};
