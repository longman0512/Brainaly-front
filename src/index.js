import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import StoreContext from './context/index';
import CollectionContext from './context/collection';
import App from './App';

function Root() {
  const [store, setStore] = React.useState({});
  const [collection, setCollection] = React.useState({});
  const value = { store, setStore };
  const collect = { collection, setCollection };

  return (
    <StoreContext.Provider value={value}>
      <CollectionContext.Provider value={collect}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollectionContext.Provider>
    </StoreContext.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// serviceWorker.unregister();
