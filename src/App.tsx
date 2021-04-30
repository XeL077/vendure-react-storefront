import React from 'react';
import './App.css';
import { useState } from "react";
import { observer } from 'mobx-react';
import { MainStore } from './stores/MainStore';

export const App = observer(() => {
    const [store] = useState(() => new MainStore())
    return (
    <div className="App">
      {store.count}
      <button onClick={() => store.changeTest(store.count + 1)}>+</button>
    </div>
    );
});
