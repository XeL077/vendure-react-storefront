import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { MainStore } from './stores/MainStore';
import { Headers } from './components/Headers/Headers';
import { MenuCategories } from './components/MenuCategories/MenuCategories';
import { Footer } from './components/Footer/Footer';
import {MainRouting} from './routes/routeMain';

import './App.css';

export const App = observer(() => {
    const [store] = useState(() => new MainStore())
    return (
    <div className="App">
      <Headers />

      <MenuCategories />
      <MainRouting></MainRouting>

      <Footer />
    </div>
    );
});
