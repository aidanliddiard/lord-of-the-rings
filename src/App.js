import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import Characters from './views/Characters/Characters';
import Main from './views/Main/Main';
import Header from './components/Header';
import Films from './views/Films/Films';
import Books from './views/Books/Books';

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
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
