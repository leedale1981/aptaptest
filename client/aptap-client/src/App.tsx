import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/home-page';
import AccountsPage from './pages/accounts-page';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState("");

  const loginCallback = (accessToken: string, history: any) => {
    setAccessToken(accessToken);
    setTimeout(() => {
      history.push("/accounts");
    }, 1000)
  };

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={
                () => <HomePage loginCallback={loginCallback} />
            } />
            <Route exact path='/accounts' render={
                (props) => <AccountsPage accessToken={accessToken} />
            } />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
