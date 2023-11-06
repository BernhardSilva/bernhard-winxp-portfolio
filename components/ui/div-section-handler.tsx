interface DivSectionHandlerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	ref?: React.RefObject<HTMLDivElement>;
}

export const DivSectionHandler = ({
	className,
	onClick,
	onDoubleClick,
	onMouseDown,
	content,
	ref,
	...props
}: DivSectionHandlerProps) => {
	return (
		<div
			ref={ref}
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
