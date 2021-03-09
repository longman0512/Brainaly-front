import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import StoreContext from './context/index';
import App from './App';

function Root() {
  const [store, setStore] = React.useState({});
  const value = { store, setStore };

  return (
    <StoreContext.Provider value={value}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// serviceWorker.unregister();
