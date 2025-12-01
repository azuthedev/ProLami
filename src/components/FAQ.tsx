import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const sectionVariants = {
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

const CONTENT = {
  title: 'Vanliga frågor',
  subtitle: 'Här hittar du svar på de vanligaste frågorna.',
  faqs: [
    {
      question: 'Hur länge är hållbarhet på Lash&Brow Lamination?',
      answer: 'Hållbarheten är mellan 4-6 veckor.',
    },
    {
      question: 'Vad är skillnaden mellan vanlig Lashlift och YUMI?',
      answer: 'Lashlift och Yumi Lashlift har samma mål med skillnaden:\n\nPremium vätskor med vårdande ingredienser.\n\nMer hållbarhet på 8 veckor.',
    },
    {
      question: 'Hur länge håller Permanent Makeup?',
      answer: 'Permanent Makeup håller oftast 2-4 år efter påfyllningen. För mer information om behandlingen rekommenderas det att boka en Kostnadsfri konsultation innan besöket.',
    },
    {
      question: 'Skadar Lamination bryn och fransarna?',
      answer: 'Nej. Om du följer terapeutens rekommendationer och tar hand om dina fransar och bryn efter behandlingen är det inte skadligt. Tvärtom kan du få ett hållbart resultat och bättre kvalitet över tid.',
    },
  ],
  cta: {
    text: 'Boka tid',
    href: 'https://www.bokadirekt.se/places/odenplanskliniken-35930',
  },
};

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b border-[#E4E1DB] cursor-pointer"
      style={{ borderColor: 'rgba(228, 225, 219, 0.7)' }}
      onClick={onToggle}
    >
      <div className="py-6 flex items-center justify-between gap-4">
        <h3 className="font-inter font-medium text-[18px] lg:text-[18px] text-[#000000] leading-[150%]">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            className="text-[#000000]"
            style={{ opacity: 0.6 }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="overflow-hidden"
      >
        <div className="pb-6 pt-4">
          <p
            className="font-inter text-[14px] lg:text-[16px] leading-[150%] text-[#232323] w-[90%] whitespace-pre-line"
            style={{ opacity: 0.9 }}
          >
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8F7F4] pt-[64px] lg:pt-[80px] pb-[80px] lg:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center mb-16 lg:mb-[64px]"
        >
          <h2
            className="font-cormorant text-[36px] lg:text-[48px] leading-[150%] text-[#000000] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {CONTENT.title}
          </h2>
          <p
            className="font-inter text-[16px] lg:text-[20px] leading-[150%] text-[#232323]"
            style={{ opacity: 0.9 }}
          >
            {CONTENT.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="max-w-[760px] mx-auto"
        >
          {CONTENT.faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <a
            href={CONTENT.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-[300px] lg:w-[227px] h-[52px] lg:h-[56px] bg-[#232323] text-white rounded-lg font-inter text-[16px] font-medium transition-colors duration-200 hover:bg-[#000000]"
          >
            {CONTENT.cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
