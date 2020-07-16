import React, { useState } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {


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
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth
    },
  });
  return response.data;
}

SignIn();


return (
  <div className="App">

  </div>
);
}

export default App;
