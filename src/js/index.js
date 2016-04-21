require('../css/master.sass');

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

const mountNode = document.getElementById('app');

ReactDOM.render(<Layout />, mountNode);
