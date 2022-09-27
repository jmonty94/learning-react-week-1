import { useState } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';


function App() {
  const [count, setCount] = useState(0);

  const [shouldShowName, setShouldShowName] = useState(false);
  /**
   * Use State is a function that returns an array with 2 elements
   * the 1st element will be the value that you pass into state
   * the 2nd element is a function for updating the state
   */

  return (
    <>
      {
        shouldShowName ?
          <h1>James</h1>
          :
          null
      }
      <button
        onClick={() => {
          if (count>=5) {
            setShouldShowName(!shouldShowName)
          } else {
            alert('Count needs to be greater than or equal to 5')
          }
        }
        }
      >
        Show/Hide
      </button>

      <h1>
        Count: {count}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1)
          console.log('hello',)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
          console.log('goodbye',)
        }}
      >
        Decrement
      </button>
      <HelloWorld
        className='blue'
        id='James'
        name='James'
      />
    </>
  );
}

export default App;

// SPA 