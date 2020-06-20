import React from 'react';
import ReactDOM from 'react-dom';

//import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const root = document.getElementById('root');

ReactDOM.render(<CounterApp value={0}/>, root);
//ReactDOM.render(<FirstApp greet='Hello, I am Goku!!!'/>, root);

