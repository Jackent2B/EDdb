import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default App;
