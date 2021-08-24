import React from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend} from 'react-dnd-html5-backend';
import GlobalStyle from '../src/styles/globalStyles'
import { GamePage, Login, Cadastro, Ranking} from './pages/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Login} />
              <Route path="/home" component={GamePage} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/ranking" component={Ranking} />
          </Switch>
        </ BrowserRouter>
        <GlobalStyle/>
      </DndProvider>
    </div>
  );
}

export default App;