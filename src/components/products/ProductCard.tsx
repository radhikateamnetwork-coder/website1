import { motion } from 'framer-motion';
import { Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

export function ProductCard({ product, index, onClick }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="aspect-[3/4] bg-accent rounded-sm overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </motion.article>
  );
}
