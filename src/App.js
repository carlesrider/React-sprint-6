// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Escena from './components/Escena/Escena';
import history from './history.json';


function App() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="App">
      <Button onClick={prev} text="Anterior" />
      <Button onClick={next} text="Següent" />
      {history.map((sentence, key) => <Escena key={key} text={sentence} className={(index === key) ? "selected" : ""} />)}
    </div>
  );
}

export default App;
