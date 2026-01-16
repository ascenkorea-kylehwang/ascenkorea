
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 개발 모드에서의 로딩 확인용 로그
console.log("ASCENKOREA App initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("FATAL: Root element '#root' not found in DOM.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
