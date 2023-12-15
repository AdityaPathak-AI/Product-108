import './App.css';

const App = () => {
  const name = "Aditya";
  const age = 21;
  const city = <h1>Indore</h1>;
  const state = "Madhya Pradesh";
  
  return (
    <div className="App">
      <h1> {name} </h1>
      <h1> {age} </h1>
          {city}
      <h1>{state}</h1>
    </div>
  );
}

export default App;
