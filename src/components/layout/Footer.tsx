import logo from '@/assets/avontae-logo-2.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Logo & Philosophy */}
          <div className="space-y-6">
            <img src={logo} alt="AVONTAÉ" className="h-8" />
            <p className="text-body text-muted-foreground max-w-xs">
              A care-led institution for the earliest arrivals. 
              Calm before commerce.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-caption text-foreground">Contact</h4>
            <div className="space-y-2 text-body text-muted-foreground">
              <p>care@avontae.com</p>
              <p>+1 (888) 000-0000</p>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-caption text-foreground">Legal</h4>
            <div className="space-y-2 text-body">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors luxury-link">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors luxury-link">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors luxury-link">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} AVONTAÉ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
