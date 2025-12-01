import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bookingUrl = 'https://www.bokadirekt.se/places/odenplanskliniken-35930';
  const instagramUrl = 'https://www.instagram.com/pro.lamiination/';

  return (
    <footer id="kontakt" className="bg-[#232323] pt-[48px] pb-[40px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-20">
          <div className="flex flex-col items-center justify-center text-center">
            <picture>
              <source srcSet="/assets/prolami_white.webp" type="image/webp" />
              <img
                src="/assets/prolami_white.png"
                alt="PRO LAMINATION"
                className="w-[140px] h-auto"
                style={{ mixBlendMode: 'screen' }}
              />
            </picture>

            <p className="font-inter font-semibold text-[14px] text-[#F5F5F5]/80 leading-[160%] mt-8 hidden lg:block">
              Naturlig skönhet.<br />Perfekt utförd.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-center text-center lg:text-left w-full lg:w-auto">
            <h3 className="font-inter font-semibold text-[14px] text-[#F5F5F5] mb-3">
              Kontakt
            </h3>

            <div className="flex flex-col gap-4 lg:gap-4 items-start w-[240px] lg:w-auto lg:ml-0">
              <div className="flex flex-col gap-[10px] text-left">
                <p className="font-inter font-semibold text-[13px] text-[#F5F5F5]">
                  Adress:
                </p>
                <p className="font-inter text-[13px] text-[#F5F5F5]/80">
                  Här kommer adressen att stå
                </p>
              </div>

              <div className="flex flex-col gap-[10px] text-left">
                <p className="font-inter font-semibold text-[13px] text-[#F5F5F5]">
                  E-post:
                </p>
                <a
                  href="mailto:kontakt@prolami.se"
                  className="font-inter text-[13px] text-[#F5F5F5]/80 hover:underline"
                >
                  kontakt@prolami.se
                </a>
              </div>

              <div className="flex flex-col gap-[10px] text-left">
                <p className="font-inter font-semibold text-[13px] text-[#F5F5F5]">
                  Telefon:
                </p>
                <a
                  href="tel:+46700000000"
                  className="font-inter text-[13px] text-[#F5F5F5]/80 hover:underline"
                >
                  +46 (0)70 000 00 00
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="font-inter font-semibold text-[14px] text-[#F5F5F5] mb-3">
              Följ &amp; boka
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center lg:mt-8">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter font-medium text-[14px] text-[#F5F5F5] hover:underline mb-8 lg:mb-6 flex items-center gap-2"
              >
                <Instagram size={18} strokeWidth={1.5} />
                Följ på Instagram →
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[240px] lg:w-[200px] h-[56px] px-8 bg-[#F5F1E8] text-[#232323] rounded-lg font-inter text-[16px] font-medium transition-all duration-200 hover:bg-[#E7DFD2]"
              >
                Boka tid
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] mt-12 pt-4">
          <p className="font-inter text-[12px] text-[#F5F5F5]/60 text-center">
            © {currentYear} PRO LAMINATION. Alla rättigheter förbehålls.
          </p>
        </div>
      </div>
    </footer>
  );
}
