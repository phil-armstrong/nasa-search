import React from 'react';
import { Container, Title } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AssetPage } from './asset';
import { GalleryPage } from './gallery';

export const App: React.FC = () => {
  return (
    <Container>
      <Title>NASA Search</Title>
      <Router>
        <Switch>
          <Route path="/asset/:id">
            <AssetPage />
          </Route>
          <Route path="/search">
            <GalleryPage />
          </Route>
          <Redirect to="/search" />
        </Switch>
      </Router>
    </Container>
  );
};
