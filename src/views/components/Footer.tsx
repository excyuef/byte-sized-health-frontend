import Logo from "../../assets/Logo_Byte_Sized_Health-removebg-preview.png";

function Footer() {
  return (
    <footer className="w-full bg-[var(--primary-color-1)] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-90 rounded-lg flex items-center justify-center">
              <img
                src={Logo}
                alt="Byte-Sized-Health Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Byte-Sized-Health
            </span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Membantu menjaga kesehatan mental dan mencegah burnout dengan
            langkah kecil yang mudah dilakukan setiap hari. Temukan tips, artikel, dan dukungan untuk kesejahteraan mental Anda.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Beranda
              </a>
            </li>
            <li>
              <a href="/artikel" className="hover:text-white transition-colors">
                Artikel & Tips
              </a>
            </li>
            <li>
              <a href="/chatbot" className="hover:text-white transition-colors">
                ByteCare
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Kontak
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/50 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-white/70">
          © 2026 Byte-Sized-Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
