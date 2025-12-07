import { motion } from 'framer-motion';

// Animation variants
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

// Service data
const SERVICES = [
  {
    id: 2,
    title: 'Browlift & Lashlift',
    description: 'Lamination – lyft dina bryn fransar naturligt med hjälp av permanenta vätskor. Resultatet blir fylligare, välvårdat och mer definierat utan smink. Behandlingen ger ett långvarigt, naturligt resultat och utförs av certifierade experter.',
    image: {
      webp: '/assets/lash_brow_card.webp',
      png: '/assets/lash_brow_card.png',
    },
    bookingUrl: 'https://www.bokadirekt.se/boka-tjanst/odenplanskliniken-35930/',
  },
  {
    id: 1,
    title: 'Permanent Makeup',
    description: 'Permanent makeup (PMU) är en kosmetisk behandling där pigment förs in i det övre hudlagret för att skapa långvarig makeup. Vanliga områden är ögonbryn, eyeliner och läppar. PMU sparar tid, ger jämn form och färg, och utförs av certifierade experter för ett naturligt och hållbart resultat. Rekommenderas för att underlätta vardagen!',
    image: {
      webp: '/assets/pmu_card.webp',
      png: '/assets/pmu_card.png',
    },
    bookingUrl: 'https://www.bokadirekt.se/boka-tjanst/odenplanskliniken-35930/',
  },
  {
    id: 3,
    title: 'PMU – Laserborttagning',
    description: 'Hos oss kan du smidigt ta bort oönskad eller gammal permanent makeup på bryn, läppar eller ögon – tryggt och effektivt.',
    image: {
      webp: '/assets/laser.webp',
      png: '/assets/laser.png',
    },
    bookingUrl: 'https://www.bokadirekt.se/boka-tjanst/odenplanskliniken-35930/',
  },
  {
    id: 4,
    title: 'Trådning – Threading',
    description: 'Trådning är en skonsam och precis metod som tar bort hår från roten, ger jämna och välformade bryn, passar känslig hud och ger långvarigt resultat.',
    image: {
      webp: '/assets/threading.webp',
      png: '/assets/threading.png',
    },
    bookingUrl: 'https://www.bokadirekt.se/boka-tjanst/odenplanskliniken-35930/',
    mobileOnly: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F7F1EA] pt-20 pb-8 lg:pt-[80px] lg:pb-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <motion.h2
            variants={cardVariants}
            className="font-cormorant text-[36px] lg:text-[48px] leading-[150%] text-[#232323] text-center"
            style={{ fontFamily: 'Cormorant Garamond, serif', marginBottom: '16px' }}
          >
            Behandlingar
          </motion.h2>

          {/* Subline */}
          <motion.p
            variants={cardVariants}
            className="font-inter text-[16px] lg:text-[20px] leading-[150%] text-[#232323] font-medium text-center"
            style={{ marginBottom: '64px' }}
          >
            Exklusiva behandlingar för fransar, bryn och permanent makeup.
          </motion.p>

          {/* Cards Row */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 w-full lg:w-auto lg:justify-center">
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`flex flex-col items-center ${service.mobileOnly ? 'lg:hidden' : ''}`}
              >
                {/* Card - Image Only */}
                <div
                  className="bg-white rounded-2xl w-full lg:w-[380px] h-[460px] overflow-hidden"
                  style={{
                    border: '1px solid rgba(35, 35, 35, 0.16)',
                    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.09)',
                  }}
                >
                  {service.image ? (
                    <picture>
                      <source srcSet={service.image.webp} type="image/webp" />
                      <img
                        src={service.image.png}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        style={{ display: 'block' }}
                      />
                    </picture>
                  ) : (
                    <div className="w-full h-full bg-white"></div>
                  )}
                </div>

                {/* Text Content Below Card */}
                <div className="flex flex-col items-center w-full lg:w-[370px]" style={{ marginTop: '32px' }}>
                  {/* Service Title */}
                  <h3
                    className="font-cormorant text-[24px] lg:text-[30px] leading-[150%] text-[#000000] font-semibold text-center"
                    style={{ fontFamily: 'Cormorant Garamond, serif', marginBottom: '24px' }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <div className="w-full flex items-start justify-center lg:min-h-[168px]">
                    <p
                      className="font-inter text-[16px] leading-[150%] text-[#232323] text-center"
                      style={{ opacity: 0.9 }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-[300px] lg:w-[227px] h-[52px] lg:h-[56px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
                    style={{ marginTop: '32px' }}
                  >
                    Boka tid
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            variants={cardVariants}
            className="w-full max-w-[1280px] h-[1px] bg-[#E4E1DB]"
            style={{ opacity: 0.7, marginTop: '124px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
