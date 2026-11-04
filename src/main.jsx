import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("SHINE HOLIDAYS Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          padding: '24px',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            background: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <img src="/images/logo/logo-horizontal-bold-crisp.png" alt="SHINE HOLIDAYS" style={{ height: '36px', width: 'auto' }} />
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#E6C35C', marginBottom: '8px' }}>
            Loading SHINE HOLIDAYS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', fontSize: '14px', marginBottom: '24px' }}>
            A quick refresh is required to display your luxury coach rental experience.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'linear-gradient(135deg, #e6c35c, #d4af37)',
              color: '#16213e',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '9999px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(212, 175, 55, 0.4)'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
