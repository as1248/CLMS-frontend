import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = 'http://3.39.87.171';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
);