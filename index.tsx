
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

// Rule 7: Diagnostics
console.log('[Bigi Diagnostics]', {
  buildMode: 'development', // This would be process.env.NODE_ENV in a CRA/Vite setup
  publicUrl: '/', // This would be process.env.PUBLIC_URL
  location: window.location.href,
});

// Rule 5: Global error handling
function showGlobalErrorToast(message: string) {
    let toastContainer = document.getElementById('global-toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'global-toast-container';
        Object.assign(toastContainer.style, {
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '10000',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        });
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.textContent = `🚨 ${message}`;
    Object.assign(toast.style, {
        backgroundColor: '#ef4444', // red-500
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        opacity: '0',
        transition: 'opacity 0.3s ease',
    });
    
    toastContainer.appendChild(toast);
    
    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 5000);
}

window.addEventListener('error', event => {
  console.error('Global error:', event.error || event.message);
  showGlobalErrorToast('An unexpected error occurred.');
});

window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled rejection:', event.reason);
  showGlobalErrorToast('An operation failed unexpectedly.');
});


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);