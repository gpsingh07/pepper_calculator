import React from 'react'


const Cell = ({text, handleClick}) => {
  const className = 'cell' + (text === '0' ? ' double-width': '');
  return(
    <button 
      className={className}
      onClick={() => handleClick(text)}
    >
      {text}
    </button>
  )
}

const KeyPad = ({handleClick}) => {
  const topKeys = ['C', '+/-', '%'];
  const rightKeys = ["÷","×","-","+","="];
  const numKeys = ['7','8','9','4','5','6','1','2','3','0','.'];
  return(
    <div className="keypad">
      <div className="left-section">
        <div className="top-section">
          { topKeys.map( k => <Cell key={k} text={k} handleClick={handleClick}/>) }
        </div>
        <div className="numpad">
          { numKeys.map( k => <Cell key={k} text={k} handleClick={handleClick}/>) }
        </div>
      </div>
      <div className="right-section">
        { rightKeys.map( k => <Cell key={k} text={k} handleClick={handleClick}/>) }
      </div>
    </div>
  )
}

export default KeyPad
