import {useState} from 'react'
import './App.css';

function App() {
  const [step, changeStep] = useState(0)
  const [inputValue, setInputValue] = useState('');
  console.log('STEP', step)
  console.log('inputValue', inputValue)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const verifyStep1 = () => {
    if (inputValue.toLowerCase() === 'red bird')
    changeStep(2)
    setInputValue('')
  }

  return (
    <div className="App">
      {step === 0 && 
        <fragment>
          <header className="App-header-orwell">
            <p>🐀 Welcome to 1984 🐀</p>
          </header>
          <div className="body-orwell">
            <p>1984 marked the beginning of Emily&rsquo;s life.</p>
            <p>This marks the beginning of your scavenger hunt.</p>
            <div className="button-orwell-wrapper">
              <p>Escape these depressing Orwellian colors. → → →</p>
              <button className="button-orwell" onClick={()=>changeStep(1)}>Start the Hunt!</button>
            </div>
          </div>
        </fragment>
      }

      {step === 1 && 
        <fragment>
          <header className="App-header-eighties">
            <p>🐻 Brown Bear Brown Bear, what do you see? 🐻</p>
            <p>I see a Baby Yoda looking at me.</p>
          </header>
          <div className="body-eighties">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              classname="input-field"
              placeholder="Enter your answer"
            />
            <button className="button-eighties" onClick={verifyStep1}>Continue</button>
          </div>
        </fragment>
      }

      {step === 2 && 
        <fragment>
          <header className="App-header-eighties">
            <p>Next prompt</p>
            <p></p>
          </header>
          <div className="body-eighties">
            <p>Enter the code</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              classname="input-field"
              placeholder="Enter your answer"
            />
            <button className="button-eighties" onClick={verifyStep1}>Continue</button>
          </div>
        </fragment>
      }
    </div>
  );
}

export default App;
