import { motion } from 'framer-motion';

const standards = [
  {
    title: 'Materials Discipline',
    image: './assets/01_materials_discipline.png',
    description:
      'We begin with fabric. Every textile is selected for its gentleness against sensitive skin—organic cottons, pre-washed for softness, OEKO-TEX certified for safety. No compromises.',
    detail:
      'Our fabrics undergo rigorous testing for chemical residues, pH balance, and allergen potential before entering production.'
  },
  {
    title: 'Construction Logic',
    image: './assets/02_construction_logic.png',
    description:
      'Seams are positioned away from pressure points. Closures are designed for medical access when needed. Every detail serves the child, not the aesthetic.',
    detail:
      'Flat-lock stitching, reversed seams, and strategic layering protect the most delicate skin from irritation.'
  },
  {
    title: 'Design Restraint',
    image: './assets/03_design_restraint.png',
    description:
      "Less is more. We resist decoration, ornamentation, and anything that doesn't serve function. Beauty emerges from intention, not excess.",
    detail:
      'No tags, no rough appliqués, no unnecessary hardware. Every element earns its place.'
  },
  {
    title: 'Care Philosophy',
    image: './assets/04_care_philosophy.png',
    description:
      'Safety is not negotiable. We exceed regulatory standards because trust is built through exceeding expectations, not meeting minimums.',
    detail:
      'Independent laboratory testing, transparent sourcing, and full material traceability for every piece.'
  }
];

export function StandardSection() {
  return (
    <section id="standard" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-caption text-muted-foreground mb-4">Our Approach</p>
          <h2 className="text-editorial-xl font-serif mb-6">The Standard</h2>
          <p className="text-editorial-md text-muted-foreground max-w-2xl mx-auto">
            What we believe, how we work, and why it matters.
          </p>
        </motion.div>

        <div className="space-y-24">
          {standards.map((standard, index) => (
            <motion.article
              key={standard.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-caption text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="text-editorial-lg font-serif mt-4 mb-6">
                  {standard.title}
                </h3>

                <p className="text-body text-muted-foreground leading-relaxed mb-4">
                  {standard.description}
                </p>

                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {standard.detail}
                </p>
              </div>

              {/* IMAGE */}
              <div
                className={`relative aspect-square overflow-hidden rounded-sm ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <img
                  src={standard.image}
                  alt={standard.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
