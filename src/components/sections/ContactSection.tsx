import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you. We\'ll be in touch soon.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">Begin a Conversation</p>
            <h2 className="text-editorial-xl font-serif mb-6">Contact</h2>
            <p className="text-editorial-md text-muted-foreground">
              Questions about sizing, care, or custom requirements? 
              We're here to help you find what's right.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-caption text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="h-12 bg-secondary/50 border-border focus:border-foreground"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-caption text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="h-12 bg-secondary/50 border-border focus:border-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-caption text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help?"
                className="h-12 bg-secondary/50 border-border focus:border-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-caption text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Share your thoughts or questions..."
                required
                rows={6}
                className="bg-secondary/50 border-border focus:border-foreground resize-none"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto h-12 px-12 text-caption bg-foreground text-background hover:bg-foreground/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center md:text-left">
              We typically respond within 24-48 hours. Your information is never shared.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
