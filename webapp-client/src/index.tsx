import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Checkout from './pages/checkout/Checkout'
import { QueryClient, QueryClientProvider } from "react-query"
import ShopContext from "./shopContext"
import { ReactQueryDevtools } from 'react-query/devtools'
const client = new QueryClient();
const Admin = React.lazy(() => import('./Admin.js'))
document.querySelector('body')!.style.margin = '0px'

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Switch>
        <ShopContext>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </React.Suspense>
        </ShopContext>
      </Switch>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  ,
  document.getElementById('root')
);