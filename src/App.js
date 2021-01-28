import React from 'react';
import {Provider} from 'react-redux';
import Store from './store';

const App = () => {

  return (
    <Provider store={Store}>
      <div>
        
      </div>
    </Provider>
  );
}

export default App;
