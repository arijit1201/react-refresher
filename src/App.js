import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>
        Name: {props.name}
      </h1>
      <h2>Last Name: {props.lastname}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  const name = "john";
  const isNameShowing = false;
  return (
    <div className="App">
      <Person name={"John"} lastname={"Doe"} age={25}/>
      <Person name={"Michael"} lastname={"Dane"} age={24}/>
      <Person name={"harry"}/>
      <Person name={"Ram"}/>
      <Person name={"Shyam"}/>
    </div>
  );
}

export default App;
