import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
//import from components
import ValveSwitch from './Client/components/ValveSwitch.js';
import TempHumi from './Client/components/TempHumi.js';
import './styles.css';

const App = props => {
  return(
    <div className='router'>
      <main>
        {/*NOTES: Block comment */}
        <Switch>
          <Route
            exact
            path='/ValveSwitch'
            component={ValveSwitch}
          />
          <Route
            exact
            path='/'
            component={home}
          />
          <Route
            exact
            path='/TempHumi'
            component={TempHumi}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;