import "./Button.css";

const ResetButton = (props) => {

	return (
	<div>
		<button {...props} className="btnReset" type="button">reset</button>
	</div>
	);


}

export default ResetButton;