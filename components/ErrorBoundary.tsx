import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State;

  // FIX: Switched from class property initialization to a constructor. This is a more traditional and widely supported way to initialize state in class components, which can prevent obscure transpiler/type-checker issues that might cause properties like `props` to seem non-existent.
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', margin: '2rem auto', maxWidth: '600px', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#fff8f0', border: '1px solid #fed7aa', borderRadius: '0.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', color: '#9a3412' }}>Something went wrong.</h1>
          <p style={{ color: '#b45309' }}>We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button 
            onClick={this.handleReload}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem'
            }}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV !== 'production' && this.state.error && (
            <details style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', color: '#666', fontSize: '0.8rem', textAlign: 'left' }}>
              <summary>Error Details (Dev Only)</summary>
              {this.state.error.toString()}
              <br />
              {this.state.error.stack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
