import { motion } from 'framer-motion';

const textVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: 'easeOut',
    },
  },
};

const CONTENT = {
  title: 'Om Mig',
  name: 'Sarvin Mukhitdinova',
  role: 'Certifierad PMU-artist & specialist på fransar och bryn',
  paragraphs: [
    'Jag har en djup passion för skönhet och har arbetat med fransar och bryn sedan 2019. Under åren har jag fokuserat på att lyfta fram varje kunds naturliga drag och skapa resultat som känns harmoniska och välbalanserade.',
    'Min resa började med en fascination för hur mycket ett par välformade bryn eller fransar kan förändra ett ansikte. Det handlar inte bara om utseende utan om uttryck, närvaro och självkänsla. Jag använder min erfarenhet, känsla för detaljer och teknisk kunskap för att skapa resultat som både håller och känns rätt för personen framför mig.',
    'Jag lägger stor vikt vid att lyssna och förstå vad du vill uppnå. Varje behandling är noggrant anpassad till dina unika drag och din stil. Jag vill att du ska känna dig trygg, omhändertagen och att du lämnar salongen med en look som känns naturligt vacker och helt rätt för dig.',
  ],
  centerMessage: 'Varmt välkommen till mig. Låt oss skapa din perfekta look tillsammans.',
  cta: {
    text: 'Boka tid',
    href: 'https://www.bokadirekt.se/places/odenplanskliniken-35930',
  },
  instagram: {
    text: 'Se mer på Instagram →',
    href: 'https://www.instagram.com/prolami.se/',
  },
};

export default function AboutMe() {
  return (
    <section id="about" className="bg-[#F8F7F4] py-12 lg:py-0 lg:pb-[124px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0">
        {/* Mobile Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
          className="lg:hidden text-center font-cormorant text-[36px] leading-[150%] text-[#000000] mt-12 mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {CONTENT.title}
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:h-[750px]">
          {/* Left Side: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="h-full flex-shrink-0"
          >
            <picture>
              <source srcSet="/assets/ommig_portrait.webp" type="image/webp" />
              <img
                src="/assets/ommig_portrait.png"
                alt="Sarvin Mukhitdinova"
                className="h-[750px] w-auto object-cover"
              />
            </picture>
          </motion.div>

          {/* Gap between image and divider: 64px */}
          <div className="w-[64px] flex-shrink-0"></div>

          {/* Vertical Divider */}
          <div className="flex items-center flex-shrink-0">
            <div
              className="w-[1px] bg-[#E4E1DB]"
              style={{ height: '525px', opacity: 0.7 }}
            />
          </div>

          {/* Gap between divider and content: 64px */}
          <div className="w-[64px] flex-shrink-0"></div>

          {/* Right Side: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="flex flex-col items-center justify-center w-[651px] flex-shrink-0"
          >
            {/* Title */}
            <h2
              className="font-cormorant text-[48px] leading-[150%] text-[#000000] text-center"
              style={{ fontFamily: 'Cormorant Garamond, serif', marginBottom: '40px' }}
            >
              {CONTENT.title}
            </h2>

            {/* Name */}
            <p
              className="font-inter text-[18px] leading-[150%] text-[#232323] font-medium text-center"
              style={{ marginBottom: '8px' }}
            >
              {CONTENT.name}
            </p>

            {/* Role */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] text-center"
              style={{ opacity: 0.9, marginBottom: '24px' }}
            >
              {CONTENT.role}
            </p>

            {/* Paragraph 1 */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] w-[446px] text-left"
              style={{ marginBottom: '24px' }}
            >
              {CONTENT.paragraphs[0]}
            </p>

            {/* Paragraph 2 */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] w-[446px] text-left"
              style={{ marginBottom: '24px' }}
            >
              {CONTENT.paragraphs[1]}
            </p>

            {/* Paragraph 3 */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] w-[446px] text-left"
              style={{ marginBottom: '32px' }}
            >
              {CONTENT.paragraphs[2]}
            </p>

            {/* Center Message */}
            <div className="flex justify-center" style={{ marginBottom: '24px' }}>
              <p
                className="font-inter text-[16px] text-[#000000] text-center w-[300px]"
              >
                {CONTENT.centerMessage}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center" style={{ marginBottom: '16px' }}>
              <a
                href={CONTENT.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[227px] h-[56px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
              >
                {CONTENT.cta.text}
              </a>
            </div>

            {/* Instagram Link */}
            <div className="flex justify-center">
              <a
                href={CONTENT.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[16px] text-[#232323] font-medium transition-opacity duration-200 hover:opacity-100"
                style={{ opacity: 0.9 }}
              >
                {CONTENT.instagram.text}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="w-full mb-6"
          >
            <picture>
              <source srcSet="/assets/ommig_portrait.webp" type="image/webp" />
              <img
                src="/assets/ommig_portrait.png"
                alt="Sarvin Mukhitdinova"
                className="w-full h-auto object-cover"
              />
            </picture>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="w-full px-6"
          >
            {/* Name */}
            <p
              className="font-inter text-[18px] leading-[150%] text-[#232323] font-medium mb-2 text-center"
            >
              {CONTENT.name}
            </p>

            {/* Role */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] mb-6 text-center"
              style={{ opacity: 0.9 }}
            >
              {CONTENT.role}
            </p>

            {/* Paragraphs */}
            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] mb-4"
            >
              {CONTENT.paragraphs[0]}
            </p>

            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] mb-4"
            >
              {CONTENT.paragraphs[1]}
            </p>

            <p
              className="font-inter text-[16px] leading-[150%] text-[#232323] mb-6"
            >
              {CONTENT.paragraphs[2]}
            </p>

            {/* Center Message */}
            <div className="flex justify-center mb-6">
              <p
                className="font-inter text-[16px] text-[#000000] text-center w-[300px]"
              >
                {CONTENT.centerMessage}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-4">
              <a
                href={CONTENT.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[300px] h-[52px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
              >
                {CONTENT.cta.text}
              </a>
            </div>

            {/* Instagram Link */}
            <div className="flex justify-center mb-6">
              <a
                href={CONTENT.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[16px] text-[#232323] font-medium transition-opacity duration-200 hover:opacity-100"
                style={{ opacity: 0.9 }}
              >
                {CONTENT.instagram.text}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
