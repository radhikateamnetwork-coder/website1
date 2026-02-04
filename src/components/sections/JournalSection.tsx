import { motion } from 'framer-motion';

const journalEntries = [
  {
    type: 'Responsibility Note',
    date: '28 January 2026',
    title: 'On the Weight of Gentle Things',
    excerpt: 'There is a particular weight to caring for something fragile. Not physical weight—premature clothing weighs almost nothing—but the weight of awareness. Of knowing that every choice matters.'
  },
  {
    type: 'Care Education',
    date: '15 January 2026',
    title: 'Understanding NICU-Ready Design',
    excerpt: 'When we say a garment is NICU-ready, we mean something specific. Snap closures placed for monitor access. Seams that won\'t press against paper-thin skin. Fabrics that allow medical observation.'
  },
  {
    type: 'Quiet Observation',
    date: '03 January 2026',
    title: 'The Language of Touch',
    excerpt: 'Before language, there is touch. For premature babies especially, the sensation of fabric against skin is one of their earliest experiences of the world outside. We take that responsibility seriously.'
  }
];

export function JournalSection() {
  return (
    <section id="journal" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-caption text-muted-foreground mb-4">Thoughts & Observations</p>
          <h2 className="text-editorial-xl font-serif mb-6">Journal</h2>
          <p className="text-editorial-md text-muted-foreground max-w-2xl mx-auto">
            Notes on care, craft, and the responsibility we carry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background p-8 rounded-sm border border-border hover:border-foreground/20 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-caption text-muted-foreground">{entry.type}</span>
                <span className="text-muted-foreground/30">|</span>
                <span className="text-caption text-muted-foreground">{entry.date}</span>
              </div>
              
              <h3 className="font-serif text-xl mb-4 group-hover:text-foreground/80 transition-colors">
                {entry.title}
              </h3>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                {entry.excerpt}
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <span className="text-caption text-muted-foreground group-hover:text-foreground transition-colors luxury-link">
                  Read more
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
