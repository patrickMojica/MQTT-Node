import React, { useState } from 'react';
import './App.css';
import ValveSwitch from "./ValveSwitch";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="app">
      <ValveSwitch
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}

export default App;