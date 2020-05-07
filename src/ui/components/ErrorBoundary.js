import React from 'react';

class ErrorBoundary extends React.PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { fallback, children } = this.props;
    return this.state.hasError ? fallback : children;
  }
}

export default ErrorBoundary;
