import React from 'react';
import ReactDom from 'react-dom';
import router from './router';

let appContainer = document.getElementById('app-container');

ReactDom.render(router, appContainer);
