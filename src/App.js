import './App.css';

const Person = () => {
  return (
    <>
      <h1>
        Name: John
      </h1>
      <h2>Last Name: Doe</h2>
      <h3>Age: 30</h3>
    </>
  )
}

const App = () => {
  const name = "john";
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello {2+2}!</h1>
      {
        name? (
          <>
            {name}
          </>
        ) : (
          <>
          <h1>
            test
          </h1>
          <h2>Hello There, There is no name</h2>
          </>
            
        )
      }
    </div>
  );
}

export default App;
