import './App.css';

function App() {
  const name = "Aditya";
  const age = 21;
  const city = <h1>Indore</h1>;
  return (
    <div className="App">
      <h1> {name} </h1>
      <h1> {age} </h1>
          {city}
    </div>
  );
}

export default App;
