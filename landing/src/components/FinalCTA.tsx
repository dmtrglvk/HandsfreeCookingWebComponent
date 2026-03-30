import { GITHUB_REPO_URL } from '../site';

export default function FinalCTA() {
  return (
    <section id="get-started" className="py-16 md:py-24 lg:py-32 bg-brand scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-white mb-8 md:mb-12 leading-tight tracking-tight">
            Upgrade your recipes for real cooking
          </h2>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-brand px-10 md:px-12 py-4 md:py-6 rounded-xl text-lg md:text-xl font-lurpak-regular hover:bg-gray-100 transition-all hover:scale-105 mb-4 md:mb-6 shadow-lg hover:shadow-xl min-h-[56px]"
          >
            Get the code on GitHub
          </a>

          <p className="text-base md:text-lg text-white/80 font-lurpak-light mb-4">
            Add the script, place <code className="text-white font-lurpak-regular">&lt;handsfree-cooking&gt;</code> on
            your template, and wire selectors to your markup. Speech runs in the browser via the Web Speech API.
          </p>
          <a
            href="#how-it-works"
            className="text-base md:text-lg text-white font-lurpak-regular underline underline-offset-4 hover:text-white/90"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
