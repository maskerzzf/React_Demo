import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './02_生命周期/App';
// import Hello from './components/Hello';
// import App from './03_组件嵌套/App';
// import App from './04_组件通信/App';
// import App from './05_子传父/App';
// import App from './06_组件通信案例/App';
import App from './07_组件插槽/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Hello/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
