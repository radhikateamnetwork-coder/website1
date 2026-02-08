import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/contexts/CartContext';
import logo from '@/assets/avontae-logo-2.png';

const navItems = [
  { label: 'Begin', href: '#begin' },
  { label: 'The Standard', href: '#standard' },
  { label: 'Care', href: '#care' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const { hasScrolled } = useScrollPosition();
  const { setIsCartOpen, itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: hasScrolled ? 1 : 0, 
          y: hasScrolled ? 0 : -20 
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50"
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#begin" onClick={(e) => handleNavClick(e, '#begin')} className="flex-shrink-0">
              <img src={logo} alt="AVONTAÉ" className="h-8 md:h-10" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-300 luxury-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side: Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-accent rounded-sm transition-colors duration-300"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-accent rounded-sm transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="text-editorial-md font-serif text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
