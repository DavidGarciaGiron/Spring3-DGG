import React from 'react';
import ReactDOM from 'react-dom';
import RegisterCli from './RegisterCli';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterCli/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
