import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Checkout({ isOpen, onClose }: CheckoutProps) {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsComplete(true);
      setTimeout(() => {
        clearCart();
        setIsComplete(false);
        setStep(1);
        onClose();
      }, 3000);
    }
  };

  const handleClose = () => {
    setStep(1);
    setIsComplete(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl bg-background rounded-sm shadow-2xl overflow-hidden"
          >
            {isComplete ? (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-foreground" />
                </motion.div>
                <h2 className="text-editorial-lg font-serif mb-4">Thank You</h2>
                <p className="text-body text-muted-foreground">
                  Your order has been placed with care. 
                  <br />
                  We'll send confirmation details shortly.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h2 className="text-editorial-md font-serif">Checkout</h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      Step {step} of 2 — {step === 1 ? 'Contact & Address' : 'Payment'}
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-accent rounded-sm transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {step === 1 ? (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-caption text-foreground">Contact Information</h3>
                        <Input
                          type="email"
                          placeholder="Email address"
                          required
                          className="h-12 bg-secondary/50 border-border"
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-caption text-foreground">Shipping Address</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="First name"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                          <Input
                            placeholder="Last name"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                        </div>
                        <Input
                          placeholder="Address"
                          required
                          className="h-12 bg-secondary/50 border-border"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="City"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                          <Input
                            placeholder="Postal code"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                        </div>
                        <Input
                          placeholder="Country"
                          required
                          className="h-12 bg-secondary/50 border-border"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-caption text-foreground">Payment Details</h3>
                        <Input
                          placeholder="Card number"
                          required
                          className="h-12 bg-secondary/50 border-border"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="MM / YY"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                          <Input
                            placeholder="CVC"
                            required
                            className="h-12 bg-secondary/50 border-border"
                          />
                        </div>
                        <Input
                          placeholder="Name on card"
                          required
                          className="h-12 bg-secondary/50 border-border"
                        />
                      </div>

                      <div className="p-4 bg-secondary/50 rounded-sm space-y-2">
                        <div className="flex justify-between text-body">
                          <span>Subtotal</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-body">
                          <span>Shipping</span>
                          <span>Complimentary</span>
                        </div>
                        <div className="flex justify-between text-body font-medium pt-2 border-t border-border">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4">
                    {step === 2 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 h-12 text-caption"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      className="flex-1 h-12 text-caption bg-foreground text-background hover:bg-foreground/90"
                    >
                      {step === 1 ? 'Continue to Payment' : 'Complete Order'}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
