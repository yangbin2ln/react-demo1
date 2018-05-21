import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteMap } from './router/RouteMap';
import './index.scss';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <RouteMap />,
    document.getElementById('root') as HTMLElement
);

// registerServiceWorker();