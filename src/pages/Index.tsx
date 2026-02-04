import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSlideOut } from '@/components/cart/CartSlideOut';
import { BeginSection } from '@/components/sections/BeginSection';
import { StandardSection } from '@/components/sections/StandardSection';
import { CareSection } from '@/components/sections/CareSection';
import { JournalSection } from '@/components/sections/JournalSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <BeginSection />
        <StandardSection />
        <CareSection />
        <JournalSection />
        <ContactSection />
      </main>

      <Footer />
      <CartSlideOut />
    </div>
  );
};

export default Index;
