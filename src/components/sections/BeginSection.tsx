import { useState } from 'react';
import { motion } from 'framer-motion';
import { getFeaturedProducts, getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductDetail } from '@/components/products/ProductDetail';
import { Product } from '@/contexts/CartContext';

export function BeginSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = getFeaturedProducts();

  const categories = [
    {
      id: 'premature',
      title: 'Premature Care',
      description: 'For the earliest arrivals. Gentle, considered, protective.',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80'
    },
    {
      id: 'newborn',
      title: 'Newborn',
      description: 'The first weeks. Essential pieces for essential moments.',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80'
    },
    {
      id: 'gift-set',
      title: 'Gift Sets',
      description: 'Thoughtfully composed collections for meaningful giving.',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80'
    }
  ];

  return (
    <section id="begin" className="min-h-screen">
      {/* Hero */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container-luxury text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-caption text-muted-foreground mb-6">
              A Care-Led Institution
            </p>
            <h1 className="text-editorial-xl font-serif mb-8">
              For the Earliest
              <br />
              Arrivals
            </h1>
            <p className="text-editorial-md text-muted-foreground max-w-xl mx-auto">
              Premature and newborn essentials designed with the discipline of care, 
              not the urgency of commerce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll to begin
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Philosophy */}
      <div className="section-padding">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-editorial-lg font-serif mb-8">Our Purpose</h2>
            <p className="text-editorial-md text-muted-foreground leading-relaxed">
              AVONTAÉ exists for families navigating the most delicate beginnings. 
              Every stitch, every seam, every fabric choice reflects our understanding 
              that some arrivals need gentler care. We create for premature babies, 
              newborns, and infants up to twelve months—because the early days deserve 
              considered attention.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stage-Based Care */}
      <div className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">Collections</p>
            <h2 className="text-editorial-lg font-serif">Stage-Based Care</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-accent rounded-sm overflow-hidden mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">{category.title}</h3>
                <p className="text-body text-muted-foreground">{category.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="section-padding">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">The Collection</p>
            <h2 className="text-editorial-lg font-serif">Selected Pieces</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProductDetail
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
