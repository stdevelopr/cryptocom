import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin.js'
import Checkout from './pages/checkout/Checkout'
import { QueryClient, QueryClientProvider } from "react-query"
import ShopContext from "./shopContext"
const client = new QueryClient();
document.querySelector('body')!.style.margin = '0px'

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
        <Switch>
          <ShopContext>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/admin">
            <Admin />
          </Route>
          </ShopContext>
        </Switch>
      </BrowserRouter>
  </QueryClientProvider>
  ,
  document.getElementById('root')
);