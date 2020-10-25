import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/core';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { EventDetail, Home, NewEvent, Unexistent } from './pages';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode='dark' />
      <Router>
        <App />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/event/:id' exact component={EventDetail} />
          <Route path='/add' exact component={NewEvent} />
          <Route path='*' component={Unexistent} />
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
