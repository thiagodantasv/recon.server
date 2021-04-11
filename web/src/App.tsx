import React, {useState, useEffect} from 'react';
function App() {
  const [message, setMessage] = useState('defaul value');
  useEffect(() => {
    console.log('this is message');
  }, [message]);
  
  
  
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Page header</h1>
      </header>
      <div id="main-div">
        <button onClick = {() => {setMessage('setted')}}></button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
