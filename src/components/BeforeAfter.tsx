import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const IMAGES = [
  {
    id: 'topleft',
    webp: '/assets/foreefter_topleft.webp',
    png: '/assets/foreefter_topleft.png',
    alt: 'Före och efter behandling',
  },
  {
    id: 'topright',
    webp: '/assets/foreefter_topright.webp',
    png: '/assets/foreefter_topright.png',
    alt: 'Före och efter behandling',
  },
  {
    id: 'bottomleft',
    webp: '/assets/foreefter_bottomleft.webp',
    png: '/assets/foreefter_bottomleft.png',
    alt: 'Före och efter behandling',
  },
  {
    id: 'bottomright',
    webp: '/assets/foreefter_bottomright.webp',
    png: '/assets/foreefter_bottomright.png',
    alt: 'Före och efter behandling',
  },
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-[#F8F7F4] pt-8 pb-20 lg:pt-[52px] lg:pb-[124px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={cardVariants}
            className="font-cormorant text-[32px] lg:text-[48px] leading-[140%] lg:leading-[150%] text-[#232323] text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif', marginBottom: '16px' }}
          >
            Före & Efter
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="font-inter text-[14px] lg:text-[20px] leading-[150%] text-[#232323] text-center"
            style={{ opacity: 0.9, marginBottom: '64px' }}
          >
            Se verkliga resultat från våra behandlingar.
          </motion.p>

          <div className="hidden lg:block">
            <motion.div variants={cardVariants} className="flex flex-col items-center">
              <div className="flex justify-center" style={{ gap: '96px', marginBottom: '72px' }}>
                {IMAGES.slice(0, 2).map((image) => (
                  <div
                    key={image.id}
                    style={{
                      boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.09)',
                    }}
                  >
                    <picture>
                      <source srcSet={image.webp} type="image/webp" />
                      <img
                        src={image.png}
                        alt={image.alt}
                        style={{ display: 'block', width: '540px', height: '360px' }}
                      />
                    </picture>
                  </div>
                ))}
              </div>

              <div className="flex justify-center" style={{ gap: '48px' }}>
                {IMAGES.slice(2, 4).map((image) => (
                  <div
                    key={image.id}
                    style={{
                      boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.09)',
                    }}
                  >
                    <picture>
                      <source srcSet={image.webp} type="image/webp" />
                      <img
                        src={image.png}
                        alt={image.alt}
                        style={{ display: 'block', width: '360px', height: '480px' }}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:hidden" style={{ gap: '32px' }}>
            {IMAGES.map((image) => (
              <motion.div
                key={image.id}
                variants={cardVariants}
                style={{
                  maxWidth: '360px',
                  width: '100%',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.09)',
                }}
              >
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img
                    src={image.png}
                    alt={image.alt}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </picture>
              </motion.div>
            ))}
          </div>

          <motion.a
            variants={cardVariants}
            href="https://www.instagram.com/pro.lamiination/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[14px] lg:text-[16px] leading-[150%] text-[#232323] text-center transition-opacity duration-200 hover:opacity-70"
            style={{ marginTop: '40px', marginBottom: '24px' }}
          >
            Se fler resultat på Instagram →
          </motion.a>

          <motion.a
            variants={cardVariants}
            href="https://www.bokadirekt.se/places/odenplanskliniken-35930"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-[300px] lg:w-[227px] h-[52px] lg:h-[56px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
          >
            Boka tid
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
