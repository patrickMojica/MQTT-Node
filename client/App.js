import React, { useState } from 'react';
import './App.css';
import ValveSwitch from "./ValveSwitch";

function App() {

  const appToggle = () => {
    console.log('appToggle: ', value);

    const body = {
      topic: '/nRF/valve',
      message: value ? 'false' : 'true'
    };
    console.log('body: ', body);

    fetch('/api/publish/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => {
        console.log('resp: ', resp);
        resp.json();
      })
      .then((data) => {
        console.log('Data: ', data);
      })
      .catch(err => console.log('appToggle fetch /api/publish: ERROR: ', err));

      setValue(!value);
  }

  const [value, setValue] = useState(false);
  return (
    <div className="app">
      <ValveSwitch
        isOn={value}
        onColor="#EF476F"
        handleToggle={appToggle}
      />
    </div>
  );
}



export default App;