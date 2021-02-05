import "./Display.css";

const Display = (props) => {

	return (
		<div>
			<p className="text-display">{props.children}</p>
		</div>
	);
}

export default Display;