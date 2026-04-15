import Logo from "../../assets/Logo_Byte_Sized_Health-removebg-preview.png";

function Footer() {
  return (
<<<<<<< HEAD
    <footer className="w-full bg-[#9ac0fd] text-white py-10 mt-20">
      <div className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
=======
    <footer className="w-full bg-(--primary-color-2) text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
        <div className="lg:col-span-1">
>>>>>>> 7f735724eeda4ca43fffc3ab8bfe23b6c323c494
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={Logo}
                alt="Byte-Sized-Health Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Byte-Sized-Health
            </span>
          </div>

          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Membantu menjaga kesehatan mental dan mencegah burnout dengan
            langkah kecil setiap hari.
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
              <a href="/articles" className="hover:text-white transition-colors">
                Artikel & Tips
              </a>
            </li>
            <li>
              <a href="/ChatBotPage" className="hover:text-white transition">
                ByteCare
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="" className="hover:text-white transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white transition-colors">
                Kontak
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-white/40 mt-10">
        <div className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 py-6 text-center text-white/70 text-sm">
          © 2026 Byte-Sized-Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
