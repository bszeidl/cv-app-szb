import "./Input.css";

const InputTextArea = (props) => {

	return (    
	<div className="textField">
		<textarea name="textAreaFirst" id="textAreaFirst" cols="30" rows="10" {...props}></textarea>
	</div>
);

}

export default InputTextArea;

