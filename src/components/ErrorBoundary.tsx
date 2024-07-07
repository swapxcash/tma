import  { FC, ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode | FC<{ error: unknown }>;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, fallback }) => {
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setError(null);
  }, [children]);

  if (error) {
    if (typeof fallback === 'function') {
      const FallbackComponent = fallback as FC<{ error: unknown }>;
      return <FallbackComponent error={error} />;
    }

    return fallback ? fallback : null;
  }

  return children as ReactNode;
};
