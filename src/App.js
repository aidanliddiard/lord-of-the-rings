import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import Characters from './views/Characters/Characters';
import Main from './views/Main/Main';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
