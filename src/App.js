import { useState } from "react";
import { evaluate } from "mathjs";

import './App.css';
import Input from "./components/Input";

function App() {
  const [result, setResult] = useState("0");
  const [text, setText] = useState("");

  const toText = (val) => {
    setText(text + val);
  };

  const toResult = (val) => {
    setResult(val);
  };

  const clickText = (inside) => {
    toText(inside);
  };

  const clickResult = () => {
    toResult(evaluate(text))
  };

  const clearInput = () => {
    setResult("0");
    setText("");
  };

  const buttons = ['(',')','%','AC',7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+'];
  return (
    <div className='container'>
      <div className='screen'>
        <Input text={text} result={result}/>
      </div>
      <div className="buttonBox">
        {buttons.map((button, index) => {
          if(index === 3){
            return <Button key={index} label={button} click={() => clearInput()} />;
          } else if(index === 18) {
            return <Button key={index} label={button} click={() => clickResult()} />;
          } else {
            return <Button key={index} label={button} click={() => clickText(button)} />;
          }
        })}
      </div>
    </div>
  );
};

const Button = (props) => {
  return <button className="button" onClick={props.click}>{props.label}</button>;
};
export default App;
