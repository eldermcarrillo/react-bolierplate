//import
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import store from './store/configureStore'

const Home = React.lazy(() => import('./components/home/index'));
const Dashboard = React.lazy(() => import('./components/dashboard/index'));

const loading = () => <div>Loading...</div>;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home page" render={props => <Home {...props}/>} />
          <Route exact path="/dash" name="Dashboard page" render={props => <Dashboard {...props}/>} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  </Provider>, document.getElementById('root')
)