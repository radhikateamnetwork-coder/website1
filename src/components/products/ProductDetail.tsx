import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  if (!product) return null;

  const sizes = product.sizeGuide.split(' | ').filter(s => s.includes('month'));

  const handleAddToCart = () => {
    addToCart(product, selectedSize || sizes[0] || undefined);
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
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-[4/5] bg-accent">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:relative md:top-0 md:right-0 md:self-end p-2 hover:bg-accent rounded-sm transition-colors mb-4"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex-1 space-y-6">
                  <div>
                    <p className="text-caption text-muted-foreground mb-2">
                      {product.category === 'premature' && 'Premature Care'}
                      {product.category === 'newborn' && 'Newborn Collection'}
                      {product.category === 'infant' && '0-12 Months'}
                      {product.category === 'gift-set' && 'Gift Sets'}
                    </p>
                    <h2 className="text-editorial-lg font-serif">{product.name}</h2>
                  </div>

                  <p className="text-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-caption text-foreground mb-2">Fabric & Materials</h3>
                      <p className="text-sm text-muted-foreground">{product.fabricInfo}</p>
                    </div>

                    <div>
                      <h3 className="text-caption text-foreground mb-2">Care Instructions</h3>
                      <p className="text-sm text-muted-foreground">{product.careInstructions}</p>
                    </div>

                    {sizes.length > 1 && (
                      <div>
                        <h3 className="text-caption text-foreground mb-3">Size</h3>
                        <div className="flex flex-wrap gap-2">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 text-xs border rounded-sm transition-colors ${
                                selectedSize === size || (!selectedSize && size === sizes[0])
                                  ? 'border-foreground bg-foreground text-background'
                                  : 'border-border hover:border-foreground'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-editorial-md font-serif">${product.price}</span>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    className="w-full h-12 text-caption bg-foreground text-background hover:bg-foreground/90"
                  >
                    Add to Selection
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
