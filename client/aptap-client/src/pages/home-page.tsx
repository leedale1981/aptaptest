import React, { useState } from 'react';
import { Button, Typography, Divider, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export interface HomePageProps {
  loginCallback: (accessToken: string, history: any) => void
}

function HomePage(props: HomePageProps) {
  const [authenticated, setAuthenticated] = useState(false);
  let history = useHistory();

  const getAccessToken = () => {
    fetch('http://localhost:5000/connect/token', {
      method: "POST",
      body: "client_id=clientid&client_secret=secret&grant_type=client_credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((response: Response) => {
      response.json().then((accessTokenJson) => {
        setAuthenticated(true);
        props.loginCallback(accessTokenJson.access_token, history);
      });
    })
    .catch((reason) => {
      console.log(reason);
    });
  };

  return (
    <header className="App-header">
      <Typography variant="h2">ApTap Technical Test</Typography>
      <Divider />
      <Button variant="contained" onClick={getAccessToken} style={(authenticated) ? { backgroundColor: "green"} : { backgroundColor: "white" }}>
        { (authenticated) ? "Logged In" : "Login" } 
      </Button>
    </header>
  );
}

export default HomePage;
