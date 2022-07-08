import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter} from "react-router-dom";
import App from './App';

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

