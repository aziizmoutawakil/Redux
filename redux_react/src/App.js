import './App.css';
import Level1 from './components/level1';
import { Provider } from 'react-redux';
import Store from './redux/configurStore';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={Store}>
         <Level1/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
