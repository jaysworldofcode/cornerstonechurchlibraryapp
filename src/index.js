import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import * as serviceWorker from './serviceWorker';

document.body.style = 'background: #fafafa;';

ReactDOM.render(<Login />, document.getElementById('root'));

serviceWorker.unregister();