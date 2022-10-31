import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  PokemonsListPage,
  PokemonDetailsPage,
  AddPokemonPage,
} from './domains/Pokemon/features';
import { Header } from './ui-kit/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={PokemonsListPage} />
        <Route exact path='/pokemon/add' component={AddPokemonPage} />
        <Route exact path='/pokemon/:id' component={PokemonDetailsPage} />
        <Route exact path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
