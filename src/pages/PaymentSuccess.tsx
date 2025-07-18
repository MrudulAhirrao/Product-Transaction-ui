import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  const location = useLocation();
  const formData = location.state as {
    name: string;
    age: string;
    mobile: string;
    email: string;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center animate-fade-in">
        <CheckCircle className="text-green-600 mx-auto mb-4 h-12 w-12" />
        <h1 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-4">
          Thank you, <span className="font-medium">{formData?.name || 'User'}</span>. Your payment was successful.
        </p>

        <div className="text-left text-sm bg-green-100 p-4 rounded-md mb-4">
          <p><strong>Name:</strong> {formData?.name}</p>
          <p><strong>Age:</strong> {formData?.age}</p>
          <p><strong>Mobile:</strong> {formData?.mobile}</p>
          <p><strong>Email:</strong> {formData?.email}</p>
        </div>

        <Link to="/" className="inline-block mt-4 text-green-700 hover:underline font-medium">
          ← Back to Product Page
        </Link>
      </div>
    </div>
  );
}
