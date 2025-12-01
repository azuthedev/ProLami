import { motion } from 'framer-motion';

const STAR_SVG = (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.58844 0.867432C7.86318 0.342441 8.67086 0.380002 8.86969 0.979736L10.3863 5.56079L15.2134 5.58813C15.8871 5.59234 16.1664 6.45257 15.6236 6.85181L11.7349 9.71021L13.2007 14.3088C13.4052 14.951 12.6731 15.4831 12.1255 15.0901L8.20563 12.2747L4.28571 15.0901C3.73818 15.4831 3.00601 14.951 3.21051 14.3088L4.67535 9.71021L0.787659 6.85181C0.244859 6.45257 0.524133 5.59234 1.19781 5.58813L6.02399 5.56079L7.54156 0.979736L7.58844 0.867432Z" fill="#E1AF4B" stroke="#E9E6E0"/>
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
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
    },
  },
};

export default function Reviews() {
  return (
    <section className="bg-[#F8F7F4] reviews-section" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          {/* Rating Line */}
          <motion.div
            variants={cardVariants}
            className="flex items-center justify-center gap-[5px] mb-6 max-w-[620px] w-full px-6"
          >
            <div className="flex-shrink-0">{STAR_SVG}</div>
            <span className="font-inter text-[12.8px] md:text-[18px] font-medium text-[#232323] text-center">
              4.9 av 5 – baserat på 2356 omdömen
            </span>
          </motion.div>

          {/* Featured Review Card */}
          <motion.div
            variants={cardVariants}
            className="w-full max-w-[620px] bg-white rounded-2xl p-8 flex flex-col items-center mb-8 lg:mb-12"
            style={{
              border: '1px solid rgba(35, 35, 35, 0.12)',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{STAR_SVG}</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="font-inter text-[13px] font-medium leading-[1.5] text-[#232323] text-center max-w-[556px] mb-5">
              Jag gjorde lashlift hos Sarvinoz och är supernöjd! Resultatet blev jättefint och håller verkligen vad man hoppas på. Det märks att du bryr dig om att kunden ska bli helt nöjd! Rekommenderar verkligen!
            </p>

            {/* Author */}
            <p className="font-inter text-[13px] font-medium text-[#232323]/90 text-center">
              – Aleksandra O.
            </p>
          </motion.div>

          {/* Two Small Cards Row */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col lg:flex-row gap-6 w-full justify-center mb-10 lg:mb-12"
          >
            {/* Left Card - Emma */}
            <div
              className="w-full max-w-[380px] mx-auto lg:mx-0 bg-white rounded-2xl p-6 flex flex-col items-center"
              style={{
                border: '1px solid rgba(35, 35, 35, 0.09)',
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Stars - smaller */}
              <div className="flex gap-1 mb-3" style={{ transform: 'scale(0.85)' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{STAR_SVG}</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="font-inter text-[12px] lg:text-[11px] font-medium leading-[1.5] text-[#232323] text-center mb-4">
                Sarvin är helt fantastisk, hon är noggrann och lyssnar på vad man säger. Jag har nog varit runt hela Stockholm i jakt på dom perfekta brynen men ingen har någonsin gjort dom så fint som Sarvin 🫶 hon är proffs på det hon gör!
              </p>

              {/* Author */}
              <p className="font-inter text-[11px] lg:text-[11px] font-medium text-[#232323]/90 text-center">
                – Emma P.
              </p>
            </div>

            {/* Right Card - Simon */}
            <div
              className="w-full max-w-[380px] mx-auto lg:mx-0 bg-white rounded-2xl p-6 flex flex-col items-center"
              style={{
                border: '1px solid rgba(35, 35, 35, 0.09)',
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Stars - smaller */}
              <div className="flex gap-1 mb-3" style={{ transform: 'scale(0.85)' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{STAR_SVG}</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="font-inter text-[12px] lg:text-[11px] font-medium leading-[1.5] text-[#232323] text-center mb-4">
                Jag är otroligt nöjd med mitt besök hos Sarvinaz. Bemötandet var varmt, trevligt och professionellt från början till slut. Servicen var på topp och jag kände mig verkligen väl omhändertagen. Resultatet blev över förväntan!
              </p>

              {/* Author */}
              <p className="font-inter text-[11px] lg:text-[11px] font-medium text-[#232323]/90 text-center">
                – Simon B.
              </p>
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.a
            variants={cardVariants}
            href="https://www.bokadirekt.se/places/odenplanskliniken-35930#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[16px] font-medium text-[#232323] text-center transition-all duration-200 hover:opacity-80 hover:underline"
          >
            Se alla recensioner →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
