import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import LogIn from './components/login/login';
import Layout from './components/Layout/Layout';
import QueryDesign from './components/QueryDesign/QueryDesign';

function App() {
  return (
      <Switch>
        <Route path="/" component={LogIn} exact />
        <Route path={"/Query"} component={QueryDesign} exact />
      </Switch>
  );
}

export default App;
