import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2, ShoppingCart } from 'lucide-react';
import PaymentForm from '@/files/Form';

export default function ProductPage() {
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (formData: {
    name: string;
    age: string;
    mobile: string;
    email: string;
  }) => {
    toast.info('Initiating Razorpay payment...');
    setIsPaying(true);

    // Simulate Razorpay flow (fake delay)
    setTimeout(() => {
      const isSuccess = Math.random() > 0.4;

      setIsPaying(false);

      if (isSuccess) {
        toast.success('Payment Successful via Razorpay');
        navigate('/success', { state: formData });
      } else {
        toast.error('Payment Failed. Try again.');
        navigate('/failure');
      }
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="text-primary" />
        Purchase: Limited Edition Shoes
      </h1>

      <div className="bg-muted p-6 rounded-xl shadow-md">
        <PaymentForm onSubmit={handlePayment} disabled={isPaying} isLoading={isPaying} />

        {isPaying && (
          <div className="flex justify-center mt-6">
            <Loader2 className="animate-spin text-primary h-6 w-6" />
            <span className="ml-2 text-muted-foreground">Processing Payment...</span>
          </div>
        )}
      </div>
    </div>
  );
}
