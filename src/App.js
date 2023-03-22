// import logo from './logo.svg';
// import './App.css';

import Escena from './components/escena/Escena';
import history from './history.json';

function App() {
  return (
    <div className="App">
      {history.map(sentence => <Escena text={sentence}/>)}
    </div>
  );
}

export default App;
