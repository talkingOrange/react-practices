import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
   return React.createElement('div', null, React.createElement(Header, null), React.createElement(Contents, null) )
}

export {App};