import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin.js'
import { QueryClient, QueryClientProvider } from "react-query"

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
  </QueryClientProvider>
  ,
  document.getElementById('root')
);