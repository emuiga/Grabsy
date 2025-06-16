import { AlertCircle, RefreshCw, WifiOff } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  isNetworkError?: boolean;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an error while loading the content.',
  onRetry,
  isNetworkError = false,
}: ErrorStateProps) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 mb-4 text-red-500">
        {isNetworkError ? (
          <WifiOff className="w-full h-full" />
        ) : (
          <AlertCircle className="w-full h-full" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {isNetworkError
          ? 'Please check your internet connection and try again.'
          : message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
} 