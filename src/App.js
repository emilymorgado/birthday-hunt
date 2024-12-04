import {useState} from 'react'
import './App.css';

function App() {
  const [step, changeStep] = useState(0)
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 // make a cryptograph for grogu that isn't too hard, maybe morse code
  const verifyStep1 = () => {
    if (inputValue.toLowerCase() === 'grogu')
    changeStep(2)
    setInputValue('')
  }

 // a picture of coffee and a script (like a play)
  const verifyStep2 = () => {
    if (inputValue.toLowerCase() === 'javascript')
    changeStep(3)
    setInputValue('')
  }

 // make a crossword (of plants?) with a highlighted word
//       b
//   f o r t y
//       e
// h u l a
//       d
  const verifyStep3 = () => {
    if (inputValue.toLowerCase() === 'bread')
    changeStep(4)
    setInputValue('')
  }

// Note says: tattoo parlor straight ahead
  const verifyStep4 = () => {
    changeStep(5)
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
              <button className="button-orwell" onClick={()=>changeStep(1)}>Start the Hunt!</button>
            </div>
            <p>(Once you start, there is no going back. Try to be sneaky!)</p>
          </div>
        </fragment>
      }

      {step === 1 && 
        <fragment>
          <header className="App-header-eighties">
            <p>🐻 Brown Bear Brown Bear, 🐻</p>
            <p>what do you see?</p>
          </header>
          <div className="body-eighties">
          <p>I see a Baby Yoda looking at me.</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter the answer"
            />
            <button className="button-eighties" onClick={verifyStep1}>Continue</button>
          </div>
        </fragment>
      }

      {step === 2 && 
        <fragment>
          <header className="App-header-eighties">
            <p>👾There's a monster upstairs,👾</p>
            <p>it's true</p>
          </header>
          <div className="body-eighties">
            <p>But don’t worry, it’s just jotting down code for Emily to do!</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter the answer"
            />
            <button className="button-eighties" onClick={verifyStep2}>Continue</button>
          </div>
        </fragment>
      }

      {step === 3 && 
        <fragment>
          <header className="App-header-eighties">
            <p>🪴Down the stairs, you’ll find Mr. Prickles,🪴</p>
          </header>
          <div className="body-eighties">
            <p>He’s not a fan of drinks, and he’ll sting if you tickle!</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="input-field"
              placeholder="1 down"
            />
            <button className="button-eighties" onClick={verifyStep3}>Continue</button>
          </div>
        </fragment>
      }

      {step === 4 && 
        <fragment>
          <header className="App-header-eighties">
            <p>🏝This is the last clue,</p>
            <p>your prize is near,🏝</p>
          </header>
          <div className="body-eighties">
            <p>Upstairs you must go, to the island so dear,</p>
            <p>Where a treasure chest waits, hidden away—</p>
            <p>On a remote island, your prize will stay!</p>
            <button className="button-eighties" onClick={verifyStep4}>I found it!</button>
          </div>
        </fragment>
      }

      {step === 5 && 
        <header className="App-header-eighties">
          <p>❤️</p>
          <div className="body-eighties"/>
        </header>
      }
    </div>
  );
}

export default App;
