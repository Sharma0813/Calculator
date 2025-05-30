import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState('');

  const handleButtoonClick = (value) => {
    if(value === 'C'){
      setInput('');
    }else if(value === '<'){
     setInput(input.slice(0,-1));
    }
    else if (value === '='){
      try{
      setInput(eval(input).toString());
    }
    catch(error){
      setInput('Error')
    }
  }
    else{
      setInput((preValue) => preValue + value)
    }
  }
  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={()=> handleButtoonClick('C')}>C</button>
          <button onClick={()=> handleButtoonClick('<')}>&lt;</button>
          <button onClick={()=> handleButtoonClick('%')}>%</button>
          <button onClick={()=> handleButtoonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={()=> handleButtoonClick('7')}>7</button>
          <button onClick={()=> handleButtoonClick('8')}>8</button>
          <button onClick={()=> handleButtoonClick('9')}>9</button>
          <button onClick={()=> handleButtoonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={()=> handleButtoonClick('4')}>4</button>
          <button onClick={()=> handleButtoonClick('5')}>5</button>
          <button onClick={()=> handleButtoonClick('6')}>6</button>
          <button onClick={()=> handleButtoonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={()=> handleButtoonClick('1')}>1</button>
          <button onClick={()=> handleButtoonClick('2')}>2</button>
          <button onClick={()=> handleButtoonClick('3')}>3</button>
          <button onClick={()=> handleButtoonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={()=> handleButtoonClick('0')}>0</button>
          <button onClick={()=> handleButtoonClick('00')}>00</button>
          <button onClick={()=> handleButtoonClick('.')}>.</button>
          <button onClick={()=> handleButtoonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App