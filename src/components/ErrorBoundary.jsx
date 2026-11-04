import React from 'react';

/**
 * Global Luxury Error Boundary
 * Catches any unexpected rendering errors and provides a graceful, branded reload screen
 */
export default class ErrorBoundary extends React.Component {
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
            Luxury Coach Rentals & Travel
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '420px', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
            We encountered a temporary display issue. Tap below to reload the latest version of SHINE HOLIDAYS.
          </p>
          {this.state.error && (
            <p style={{ color: '#F87171', fontSize: '12px', marginBottom: '16px', fontFamily: 'monospace', maxWidth: '90%', wordBreak: 'break-word' }}>
              {this.state.error.toString()}
            </p>
          )}
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
