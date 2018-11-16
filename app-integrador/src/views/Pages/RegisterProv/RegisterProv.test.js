import React from 'react';
import ReactDOM from 'react-dom';
import RegisterProv from './RegisterProv';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterProv/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
