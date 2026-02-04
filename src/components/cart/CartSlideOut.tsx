import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Checkout } from '@/components/cart/Checkout';

export function CartSlideOut() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, total } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-foreground/20"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-editorial-md font-serif">Your Selection</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-accent rounded-sm transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <p className="text-body text-muted-foreground mb-4">
                        Your selection is empty
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Explore our collection to find pieces that resonate with your care philosophy.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex gap-4">
                          <div className="w-20 h-24 bg-accent rounded-sm overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif text-base mb-1">{item.name}</h3>
                            {item.size && (
                              <p className="text-xs text-muted-foreground mb-2">{item.size}</p>
                            )}
                            <p className="text-sm text-muted-foreground mb-3">
                              ${item.price}
                            </p>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                                className="p-1 hover:bg-accent rounded-sm transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                                className="p-1 hover:bg-accent rounded-sm transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id, item.size)}
                                className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="p-6 border-t border-border space-y-4">
                    <div className="flex justify-between text-body">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Shipping and care instructions included with your order.
                    </p>
                    <Button
                      onClick={handleCheckout}
                      className="w-full h-12 text-caption bg-foreground text-background hover:bg-foreground/90"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
}
