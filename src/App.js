import React, { useState } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {

  const username = 'test@test.co.za';
  const password = 'Beach101#';
  let auth;

  async function SignIn() {
    try {
      const user = await Auth.signIn(username, password);
      auth = user.signInUserSession.idToken.jwtToken;
      const response = getData();
      console.log(response);
      console.log(auth);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  const url = 'https://cors-anywhere.herokuapp.com/https://sfi7qk8j17.execute-api.eu-west-1.amazonaws.com/Prod/api/timemeta/hierarchy/yearname'

  async function getData() {
    const data = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth
      },
    });
    return data.data;
  }

  SignIn();


  return (
    <div className="App">

    </div>
  );
}

export default App;
