import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 'prem-bodysuit-01',
    name: 'First Touch Bodysuit',
    price: 68,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    category: 'premature',
    description: 'Designed for the earliest arrivals. Gentle seams positioned away from delicate skin, with easy-access closures for medical monitoring.',
    fabricInfo: '100% Organic Pima Cotton, 180gsm interlock. OEKO-TEX certified. Pre-washed for ultimate softness.',
    careInstructions: 'Wash at 30°C with gentle detergent. Tumble dry low. Iron on reverse if needed.',
    sizeGuide: 'Premature: Up to 2.5kg'
  },
  {
    id: 'prem-blanket-01',
    name: 'Cocoon Blanket',
    price: 95,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
    category: 'premature',
    description: 'A gentle embrace for fragile beginnings. Lightweight yet warming, sized precisely for incubator use.',
    fabricInfo: 'Organic Cotton and Bamboo blend. Breathable, temperature-regulating, hypoallergenic.',
    careInstructions: 'Hand wash or machine wash cold. Lay flat to dry.',
    sizeGuide: '45cm x 60cm - Designed for incubator and early home use'
  },
  {
    id: 'new-set-01',
    name: 'Welcome Set',
    price: 145,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
    category: 'newborn',
    description: 'Everything for the first weeks. A considered collection of essentials, thoughtfully sized for newborn proportions.',
    fabricInfo: 'All pieces in 100% Organic Cotton. Undyed, natural cream color.',
    careInstructions: 'All items machine washable at 40°C. Suitable for tumble drying.',
    sizeGuide: 'Newborn: 0-1 months (up to 4.5kg)'
  },
  {
    id: 'new-romper-01',
    name: 'First Romper',
    price: 78,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    category: 'newborn',
    description: 'Classic simplicity for new arrivals. Envelope neckline for easy dressing, covered feet for warmth.',
    fabricInfo: '100% Organic Cotton jersey, 200gsm. Pre-shrunk and color-stable.',
    careInstructions: 'Machine wash at 40°C. Iron medium heat.',
    sizeGuide: 'Newborn: 0-1 months | 1-3 months available'
  },
  {
    id: 'inf-dress-01',
    name: 'Everyday Dress',
    price: 85,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80',
    category: 'infant',
    description: 'For the growing child. A relaxed silhouette that moves with active bodies while maintaining quiet elegance.',
    fabricInfo: 'Organic Linen and Cotton blend. Naturally breathable, softens with each wash.',
    careInstructions: 'Machine wash cold. Line dry recommended. Embrace natural texture.',
    sizeGuide: '3-6 months | 6-9 months | 9-12 months'
  },
  {
    id: 'inf-trouser-01',
    name: 'Soft Trouser',
    price: 65,
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&q=80',
    category: 'infant',
    description: 'Gentle elasticated waist, room to move, room to grow. Designed for comfort during all activities.',
    fabricInfo: '100% Organic Cotton twill, 220gsm. Durable yet soft.',
    careInstructions: 'Machine wash at 40°C. Tumble dry low.',
    sizeGuide: '3-6 months | 6-9 months | 9-12 months'
  },
  {
    id: 'gift-essential-01',
    name: 'Essential Gift Set',
    price: 195,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    category: 'gift-set',
    description: 'A complete introduction to considered care. Bodysuit, blanket, and hat presented in a reusable cotton bag.',
    fabricInfo: 'All items 100% Organic Cotton. Gift bag in unbleached cotton canvas.',
    careInstructions: 'Individual care instructions included with each piece.',
    sizeGuide: 'Available in Newborn (0-1 month) or 1-3 months'
  },
  {
    id: 'gift-premium-01',
    name: 'Complete Care Set',
    price: 320,
    image: 'https://images.unsplash.com/photo-1544413164-5f1b361f5bab?w=800&q=80',
    category: 'gift-set',
    description: 'The full expression of our philosophy. Seven essential pieces to accompany the earliest months with grace.',
    fabricInfo: 'Premium Organic Cotton and select natural fibers throughout.',
    careInstructions: 'Detailed care guide included in gift presentation.',
    sizeGuide: 'Available in Newborn or 1-3 months sizing'
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};
