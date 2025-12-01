import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  headline: {
    line1: 'Naturlig skönhet.',
    line2: 'Perfekt utförd.',
  },
  subline:
    'Specialiserad på bryn, fransar och permanent makeup, med fokus på att framhäva varje persons naturliga skönhet.',
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

const NAV_ITEMS = [
  { label: 'Behandlingar', href: '#services' },
  { label: 'Omdömen', href: '#reviews' },
  { label: 'Före & efter', href: '#before-after' },
  { label: 'Om mig', href: '#about' },
  { label: 'Kontakt', href: '#kontakt' },
];

const MOBILE_NAV_ITEMS = [
  { label: 'Behandlingar', href: '#services' },
  { label: 'Omdömen', href: '#reviews' },
  { label: 'Före & efter', href: '#before-after' },
  { label: 'Om mig', href: '#about' },
  { label: 'Vanliga Frågor', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    scrollToSection(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#F8F7F4] min-h-[600px] lg:min-h-0">
      <header className="absolute top-0 left-0 right-0 bg-[#F8F7F4] z-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[88px] lg:h-auto lg:pt-[29px] lg:pb-[48px]">
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-inter font-medium text-[14px] text-[#232323] transition-all duration-200 hover:border-b hover:border-[#232323] pb-[2px] ${
                    activeSection === item.href.substring(1) ? 'border-b border-[#232323]' : 'border-b border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Öppna meny"
            >
              <Menu size={22} className="text-[#232323]" />
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2" style={{ mixBlendMode: 'darken' }}>
              <picture>
                <source srcSet="/assets/logo_desktop.webp" type="image/webp" media="(min-width: 1024px)" />
                <source srcSet="/assets/logo_desktop.png" type="image/png" media="(min-width: 1024px)" />
                <source srcSet="/assets/logo_mobile.webp" type="image/webp" />
                <img
                  src="/assets/logo_mobile.png"
                  alt="Prolami"
                  className="w-[100px] lg:w-[140px] h-auto"
                />
              </picture>
            </div>

            <div className="hidden lg:block">
              <a
                href={CONTENT.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[120px] h-[40px] bg-[#232323] text-white rounded-lg font-inter text-[14px] font-medium transition-all duration-200 hover:bg-[#000000] hover:shadow-md"
              >
                {CONTENT.cta.primary.text}
              </a>
            </div>

            <div className="lg:hidden w-10"></div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#F8F7F4] shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center px-6 h-[64px] border-b border-[#E5E5E5] relative">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 absolute left-6"
                    aria-label="Stäng meny"
                  >
                    <X size={24} className="text-[#232323]" />
                  </button>
                  <picture style={{ mixBlendMode: 'darken' }}>
                    <source srcSet="/assets/logo_mobile.webp" type="image/webp" />
                    <img
                      src="/assets/logo_mobile.png"
                      alt="Prolami"
                      className="w-[100px] h-auto"
                    />
                  </picture>
                </div>

                <nav className="flex flex-col px-6 pt-8">
                  <div className="flex flex-col gap-6">
                    {MOBILE_NAV_ITEMS.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="font-inter font-medium text-[16px] text-[#232323] transition-colors duration-200"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href={CONTENT.cta.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-[48px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#000000]"
                    >
                      {CONTENT.cta.primary.text}
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="relative pt-[88px] lg:pt-[77px]">
        <div className="hidden lg:block">
          <div className="max-w-[1280px] mx-auto h-[750px]">
            <div className="grid grid-cols-[minmax(0,1fr)_104px_1px_104px_500px] h-full">
              <div className="pl-24 flex items-start pt-[165px]">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="relative"
                >
                  <h1
                    className="font-cormorant text-[64px] text-[#232323]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: '110%' }}
                  >
                    {CONTENT.headline.line1} {CONTENT.headline.line2}
                  </h1>

                  <p
                    className="font-inter text-[18px] leading-[1.5] text-[#232323] max-w-[520px]"
                    style={{ marginTop: '24px' }}
                  >
                    {CONTENT.subline}
                  </p>

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
                      onClick={(e) => scrollToSection(e, CONTENT.cta.secondary.href)}
                      className="inline-flex items-center justify-center w-[227px] h-[56px] bg-transparent border border-[#232323]/70 text-[#232323] rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#232323] hover:text-white hover:border-[#232323]"
                    >
                      {CONTENT.cta.secondary.text}
                    </a>
                  </div>
                </motion.div>
              </div>

              <div></div>

              <div className="flex items-center justify-center">
                <div
                  className="w-[1px] bg-[#E4E1DB]/80"
                  style={{ height: '525px' }}
                />
              </div>

              <div></div>

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

        <div className="lg:hidden px-6">
          <div className="flex flex-col items-center">
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

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 font-inter text-[14px] leading-[1.5] text-[#232323] text-left w-[300px]"
            >
              {CONTENT.subline}
            </motion.p>

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
                onClick={(e) => scrollToSection(e, CONTENT.cta.secondary.href)}
                className="inline-flex items-center justify-center h-[52px] w-[300px] bg-transparent border border-[#232323]/70 text-[#232323] rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#232323] hover:text-white hover:border-[#232323]"
              >
                {CONTENT.cta.secondary.text}
              </a>
            </motion.div>

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
