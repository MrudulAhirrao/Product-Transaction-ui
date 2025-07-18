import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaymentFailure() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center animate-fade-in">
        <XCircle className="text-red-600 mx-auto mb-4 h-12 w-12" />
        <h1 className="text-2xl font-bold text-red-700 mb-2">Payment Failed</h1>
        <p className="text-muted-foreground mb-4">
          Oops! Something went wrong with your payment. Please try again.
        </p>

        <Link to="/" className="inline-block mt-4 text-red-700 hover:underline font-medium">
          ← Retry Payment
        </Link>
      </div>
    </div>
  );
}
