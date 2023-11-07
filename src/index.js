import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import axios from "axios";
import { CookiesProvider } from 'react-cookie';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </RecoilRoot>
);