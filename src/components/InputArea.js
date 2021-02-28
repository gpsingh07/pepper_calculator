import React from 'react'

const InputArea = ({value, pastValue, handleChange, handleClear}) => {  
  return(
    <div className='input-area'>
      <div className='dots-cont'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
      <div className="past-value">{pastValue}</div>
      <input type='text' value={value} onKeyPress={handleChange} onChange={handleClear} />
    </div>
  )
}

export default InputArea
