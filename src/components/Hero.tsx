import { motion } from 'framer-motion';

// Animation variants
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

// Content constants
const CONTENT = {
  headline: {
    line1: 'Naturlig skönhet.',
    line2: 'Perfekt utförd.',
  },
  subline:
    'Sarvin Mukhitdinova – certifierad PMU-artist\noch specialist på fransar och bryn.',
  cta: {
    primary: {
      text: 'Boka tid',
      href: 'https://www.bokadirekt.se/places/odenplanskliniken-35930',
    },
    secondary: {
      text: 'Se före/efter',
      href: '#before-after',
    },
  },
};

// Spacing constants (px values from design spec)
const SPACING = {
  header: {
    topPadding: 32, // px-8
    bottomPadding: 32, // px-8
  },
  hero: {
    leftPadding: 96, // pl-24
    headlineToSubline: 24, // mt-6
    sublineToButtons: 32, // mt-8
    buttonGap: 16, // gap-4
  },
  mobile: {
    horizontalPadding: 24, // px-6
    topPadding: 24, // pt-6
    headlineToSubline: 16, // mt-4
    sublineToButtons: 24, // mt-6
    buttonGap: 12, // gap-3
    imageGap: 32, // mt-8
  },
};

// Dimension constants
const DIMENSIONS = {
  desktop: {
    maxWidth: 1280,
    heroHeight: 750,
    logoWidth: 140,
    imageWidth: 500,
    imageHeight: 750,
    dividerHeight: 525,
    buttonHeight: 56,
  },
  mobile: {
    logoWidth: 100,
    buttonHeight: 52,
    buttonWidth: 300,
    gradientHeight: 96,
  },
};

export default function Hero() {
  return (
    <div className="bg-[#F8F7F4] min-h-[600px] lg:min-h-0">
      {/* Header */}
      <header className="pt-8 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex justify-center">
            <picture>
              <source
                srcSet="/assets/logo_desktop.webp"
                type="image/webp"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/assets/logo_desktop.png"
                type="image/png"
                media="(min-width: 1024px)"
              />
              <source srcSet="/assets/logo_mobile.webp" type="image/webp" />
              <img
                src="/assets/logo_mobile.png"
                alt="Prolami"
                className="w-[100px] lg:w-[140px] h-auto mix-blend-darken"
              />
            </picture>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Desktop Layout: 3-column grid (text | divider | image) */}
        <div className="hidden lg:block">
          <div className="max-w-[1280px] mx-auto h-[750px]">
            <div className="grid grid-cols-[minmax(0,1fr)_104px_1px_104px_500px] h-full">
              {/* Left Column: Text Content */}
              <div className="pl-24 flex items-start pt-[165px]">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="relative"
                >
                  {/* Headline */}
                  <h1
                    className="font-cormorant text-[64px] text-[#232323]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '110%' }}
                  >
                    {CONTENT.headline.line1} {CONTENT.headline.line2}
                  </h1>

                  {/* Subline */}
                  <p
                    className="font-inter text-[18px] leading-[1.5] text-[#232323] max-w-[520px]"
                    style={{ marginTop: '24px' }}
                  >
                    {CONTENT.subline}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex" style={{ marginTop: '32px', gap: '37px' }}>
                    <a
                      href={CONTENT.cta.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-[227px] h-[56px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
                    >
                      {CONTENT.cta.primary.text}
                    </a>
                    <a
                      href={CONTENT.cta.secondary.href}
                      className="inline-flex items-center justify-center w-[227px] h-[56px] bg-transparent border border-[#232323]/70 text-[#232323] rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#232323] hover:text-white hover:border-[#232323]"
                    >
                      {CONTENT.cta.secondary.text}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Spacer Left */}
              <div></div>

              {/* Middle Column: Vertical Divider */}
              <div className="flex items-center justify-center">
                <div
                  className="w-[1px] bg-[#E4E1DB]/80"
                  style={{ height: '525px' }}
                />
              </div>

              {/* Spacer Right */}
              <div></div>

              {/* Right Column: Portrait Image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="relative h-full"
              >
                <picture>
                  <source
                    srcSet="/assets/sarvi_portrait_desktop.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/sarvi_portrait_desktop.png"
                    alt="Sarvin Mukhitdinova"
                    className="w-[500px] h-[750px] object-cover object-bottom"
                  />
                </picture>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Single column */}
        <div className="lg:hidden px-6">
          <div className="flex flex-col items-center">
            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-cormorant text-[32px] leading-[1.1] text-[#232323] text-center"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {CONTENT.headline.line1}
              <br />
              {CONTENT.headline.line2}
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 font-inter text-[14px] leading-[1.5] text-[#232323] text-left w-[300px]"
            >
              {CONTENT.subline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-6 flex flex-col gap-3 w-full items-center"
            >
              <a
                href={CONTENT.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] w-[300px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#1a1a1a]"
              >
                {CONTENT.cta.primary.text}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="inline-flex items-center justify-center h-[52px] w-[300px] bg-transparent border border-[#232323]/70 text-[#232323] rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#232323] hover:text-white hover:border-[#232323]"
              >
                {CONTENT.cta.secondary.text}
              </a>
            </motion.div>

            {/* Portrait Image with Gradient Overlay */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="mt-8 relative w-full"
            >
              <picture>
                <source
                  srcSet="/assets/sarvi_portrait_mobile.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/sarvi_portrait_mobile.png"
                  alt="Sarvin Mukhitdinova"
                  className="w-full h-auto object-cover"
                />
              </picture>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
