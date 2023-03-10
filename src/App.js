import React , {useState} from 'react'
import BasicForm from './components/BasicForm';
import AdvancedForm from './components/AdvancedForm';
import './App.css';

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">

    <h2>Cryptocurrency Stats </h2>

    <BasicForm/>
    {/* <nav>
      <h3 onClick={()=> setView("basic")}
      style={{color : view=== "basic" ? "#fff" : ""}}>
      Basic

      </h3>
      <h3 onClick={()=> setView("advanced")}
      style={{color : view=== "basic" ? "#fff" : ""}}>
      Advanced

      </h3>
    </nav>
    {view === "basic" ? <BasicForm/> : <AdvancedForm/>} */}
      
    </div>
  );
}

export default App;
