import React from 'react';

import HelloWorld from './components/HelloWorld/HelloWorld';

// import styles from '../scss/_core.scss';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <HelloWorld />
  );
};

export default App;
