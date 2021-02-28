import React, {useState} from 'react';
import InputArea from './components/InputArea';
import KeyPad from './components/KeyPad';
import './App.css';

const allowedInputs = ['1','2','3','4','5','6','7','8','9','0','+','-','/','*','=','Enter','%'];
const displayChars =  {'*': '×', '/': '÷'};


function App() {

  const [value, setValue] = useState('');
  const [pastValue, setPastValue] = useState('');

  const evaluate = () => {
    const str = value.replace(/÷/g,'/').replace(/×/,'*');
    try {
      const result = eval(str);
      setPastValue(value);
      setValue(result.toString());
    } catch (error) {
      alert('Failed to calculate')
    }
  }

  const handleChange = e => {
    const key = e.key;
    if(allowedInputs.includes(key)){
      if(['=','Enter'].includes(key)){
        const lastChar = value.slice(0, -1);
        
        if(['+','−','×','÷'].includes(lastChar)){
          alert('InCorrect Input');
          return;
        }else{
          evaluate();
        }
      } else {
        const newChar = displayChars[key] || key;
        setValue(value+newChar)
      }
    }
  }

  const handleClear = e => {
    if(e.nativeEvent.inputType === 'deleteContentBackward'){
      setValue(value.slice(0, -1));
    }
  }

  const handleClick = text => {
    if(text === 'C'){
      setValue('');
      setPastValue('');
    } else if(text === '+/-'){
      const _val = value.slice(0,1) === '-' ?  value(1) : '-'+value;
      setValue(_val);
    } else {
      if(text === '×')
        text = '*';
      if(text === '÷')
        text = '/'
      handleChange({key: text});
    }
  }

  return (
    <div className="App">
      <div className="main-cont">
        <InputArea 
          handleChange={handleChange} 
          handleClear={handleClear}
          value={value}
          pastValue={pastValue}  
        />
        <KeyPad handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
