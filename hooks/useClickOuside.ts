import { useEffect, useRef, useState, MouseEvent } from 'react';

export const useClickOutside = (initialIsOpen: boolean) => {
	const [isOpenClickOutside, setIsOpenClickOutside] = useState(initialIsOpen);
	const elementRef = useRef<HTMLDivElement>(null); // Change this lin

	const handleClickOutside = (event: MouseEvent) => {
		if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
			setIsOpenClickOutside(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside as any);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside as any);
		};
	}, []);

	return { elementRef, isOpenClickOutside, setIsOpenClickOutside };
};
