export default function Footer() {
  return (
    <footer className="bg-brand py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center font-lurpak-regular text-sm md:text-base"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center font-lurpak-regular text-sm md:text-base"
            >
              Documentation
            </a>
            <a
              href="mailto:contact@handsfreecooking.com"
              className="text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center font-lurpak-regular text-sm md:text-base"
            >
              Contact
            </a>
          </div>

          <div className="text-sm md:text-base text-white/80 font-lurpak-light">Powered by Lurpak®</div>
        </div>
      </div>
    </footer>
  );
}
