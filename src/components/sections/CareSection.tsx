import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const careTopics = [
  {
    icon: '✋',
    title: 'Handling',
    summary: 'Gentle handling preserves fabric integrity.',
    details: [
      'Always support the full weight of the garment when lifting',
      'Avoid pulling or stretching, especially when wet',
      'Button and zip before washing to prevent snagging',
      'Store flat or on padded hangers to maintain shape'
    ]
  },
  {
    icon: '💧',
    title: 'Washing',
    summary: 'Clean gently, preserve softness.',
    details: [
      'Wash at 30-40°C with mild, fragrance-free detergent',
      'Use a mesh laundry bag for delicate items',
      'Avoid bleach and fabric softeners (natural fibers are already soft)',
      'Turn garments inside out to protect outer surfaces'
    ]
  },
  {
    icon: '🌿',
    title: 'Fabric Evolution',
    summary: 'Natural fibers improve with age.',
    details: [
      'Organic cotton becomes softer with each wash',
      'Slight color variation is natural and expected',
      'Minor pilling may occur—gently remove with a fabric shaver',
      'Embrace the lived-in character of quality materials'
    ]
  },
  {
    icon: '📦',
    title: 'What to Expect',
    summary: 'Setting proper expectations.',
    details: [
      'Garments may feel slightly stiff initially—this softens quickly',
      'Natural fiber shrinkage (3-5%) is accounted for in sizing',
      'Colors may shift subtly—this is characteristic of natural dyes',
      'Wrinkles are natural; a light steam refreshes without damage'
    ]
  }
];

export function CareSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="care" className="section-padding">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-caption text-muted-foreground mb-4">Before & After Purchase</p>
          <h2 className="text-editorial-xl font-serif mb-6">Care</h2>
          <p className="text-editorial-md text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to preserve these pieces for the long term.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {careTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h3 className="font-serif text-lg">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.summary}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <ul className="space-y-3">
                      {topic.details.map((detail, i) => (
                        <li key={i} className="text-body text-muted-foreground flex items-start gap-3">
                          <span className="text-accent-foreground/50 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
