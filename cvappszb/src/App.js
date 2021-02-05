import "./App.css";
import {useState} from "react";
import ResetButton from "./Component/button/Button";
import Display from "./Component/displayfield/Display";
import InputTextArea from "./Component/inputfield/Input";


function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
          <h1>Curriculum vitae</h1>
          <ResetButton onClick={(event) => setText("")}/>
        <div className="disp-text-wrapper">
          <Display>{text}</Display>
          <InputTextArea value={text} onInput={(event) => setText(event.target.value)}/>  
        </div> 
      </div>
         
    </div>
  );
}

export default App;