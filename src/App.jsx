import { useState, useEffect, createContext } from 'react'
import './App.css'

 


function App() {
  const  [number, setNumber ] = useState (parseInt(window.localStorage.getItem("App")))

  const [isValue6, setValue6] = useState (false)

  useEffect(() => {
    if (number === 6) {
      setValue6(true)
    } else {
      setValue6(false)
    }
  })

  useEffect(() => {
      window.localStorage.setItem("App", number)

  })
  function aClick() {
      setNumber(number+1)
  }

  function bClick() {
      setNumber(number-1)
  }

  return (
    < >
    <div className="App">
      <div className='button-container'>
      <h1>Rakamin</h1>
      {isValue6 && <h1>nilai sekarang 6</h1>}
      <button onClick = {aClick} >+</button>
      <h1>{number}</h1>
      <button onClick = {bClick}>-</button>
      <button onClick = {() => { setNumber(0)}}>Reset</button>
      </div>
    </div>
    </>
  );
}

// const counterContext = createContext()

// function counterContextProvider(props) {
//   const [count, setCount] = useState(0) 

//   function changeState(type) {
//     switch (type) {
//       case 'increment':
//         setCount ((prevCount) => prevCount + 1)
//         break;
//       case 'decrement':
//         setCount (count - 1)
//         break;
//       default:
//         break;
//     }
//   }
  
//   return (
//   <counterContext.Provider value={{count, changeState}}>
//     {props.children}
//     </counterContext.Provider>
//    )
  
// }

// function Display({count}) {
//   return(
//     <div>
//       <p>Count : {count}</p>
//     </div>
//   )
// }

// function Counter({count, changeState}) {
//   return (
//     <div>
//       <button onClick={() => changeState("increment")}>+</button>
//       <Display count={count} />
//       <button onClick={() => changeState("decrement")}>-</button>
//     </div>    
//   )
// }

// function App() {
//   const [count, setCount] = useState(0) 

//   function changeState(type) {
//     switch (type) {
//       case 'increment':
//         setCount ((prevCount) => prevCount + 1)
//         break;
//       case 'decrement':
//         setCount (count - 1)
//         break;
//       default:
//         break;
//     }
//   return (
//     <div className='App'> 
//       <counterContextProvider>
//         <Counter/>
//       </counterContextProvider>
//       </div>
//      )

// }
  
  


export default App
