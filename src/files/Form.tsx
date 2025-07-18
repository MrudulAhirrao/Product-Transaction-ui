import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (formData: any) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export default function PaymentForm({ onSubmit, isLoading }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.mobile || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }
    onSubmit(formData);
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Enter Your Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            name="age"
            type="number"
            placeholder="25"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <div>
          <Label htmlFor="mobile">Mobile</Label>
          <Input
            name="mobile"
            type="tel"
            placeholder="9876543210"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <Button
          className="w-full flex items-center justify-center gap-2"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Proceed to Payment'}
        </Button>
      </CardContent>
    </Card>
  );
}
