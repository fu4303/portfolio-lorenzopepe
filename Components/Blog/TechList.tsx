import { useState, useEffect, useRef } from "react";
import { Hide, Show } from "../../assets/Chevrons";
import { CodeBrackets } from "../../assets/CodeBrackets";

interface TechListProps {
	initState?: boolean;
}

const transitionEnd = (e: TransitionEvent, node: HTMLDivElement) => {
	if (e.propertyName == "height") {
		node.style.transition = "";
		node.style.height = "auto";
	}
};

export const TechList: React.FC<TechListProps> = ({
	initState = false,
	children,
}) => {
	const [isOpen, setOpen] = useState(initState);
	const listRef = useRef<HTMLDivElement | null>(null);
	const prevOpenStateRef = useRef<boolean>(initState);

	useEffect(() => {
		const { current } = listRef;
		if (current && prevOpenStateRef.current === !isOpen) {
			if (isOpen) {
				// from px height to auto;
				const prevHeight = current.style.height;
				current.style.height = "auto";
				const endHeight = getComputedStyle(current).height;
				current.style.height = prevHeight;
				current.offsetWidth; // force repaint
				current.style.transition = "height .5s ease-in-out";
				current.style.height = endHeight;

				current.ontransitionend = (e) => transitionEnd(e, current);
			} else {
				// cleanup listener
				current.ontransitionend = null;
				// from auto height to px height;
				current.style.height = getComputedStyle(current).height;
				current.style.transition = "height .5s ease-in-out";
				current.offsetHeight; // force repaint
				current.style.height = "48px";
			}

			// match state with ref
			prevOpenStateRef.current = isOpen;
		}
	}, [isOpen, listRef]);

	return (
		<div ref={listRef} className="tech-list">
			<div className="list-header">
				<CodeBrackets />
				<h5>Technologies Used</h5>
				<button onClick={() => setOpen(!isOpen)}>
					{isOpen ? <Hide /> : <Show />}
				</button>
			</div>
			<ul
				className={isOpen ? "expanded" : "hidden"}
				aria-hidden={!isOpen}
			>
				{children}
			</ul>
		</div>
	);
};
