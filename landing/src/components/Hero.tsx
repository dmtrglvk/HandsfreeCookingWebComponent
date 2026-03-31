import { Play } from 'lucide-react';
import { GITHUB_REPO_URL } from '../site';
import { useState } from 'react';
import Stats from './Stats';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handlePlayClick = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-24 pb-6 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lurpak-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
            Turn your recipes into handsfree cooking experiences
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 md:mb-5 font-lurpak-light leading-relaxed max-w-4xl mx-auto">
            Drop in the open-source <code className="text-gray-800 font-lurpak-regular">&lt;handsfree-cooking&gt;</code>{' '}
            web component. Voice recognition uses the browser&apos;s Web Speech API—no separate cooking app and no
            speech API keys to manage yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 md:mb-16 lg:mb-20">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-lurpak-regular hover:bg-brand-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px] flex items-center justify-center"
            >
              Get the code
            </a>
            <button
              onClick={handlePlayClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-lurpak-regular hover:border-brand hover:text-brand transition-all hover:scale-105 min-h-[56px]"
            >
              <Play size={20} />
              Watch demo
            </button>
          </div>

          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl animate-slide-up mb-12 md:mb-16 lg:mb-20">
            {!videoLoaded ? (
              <button
                onClick={handlePlayClick}
                className="relative w-full aspect-video group cursor-pointer overflow-hidden block"
              >
                <img
                  src="./Screenshot_2026-03-24_at_14.53.29.png"
                  alt="Hands Free Cooking Demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand/90 rounded-full flex items-center justify-center group-hover:bg-brand group-hover:scale-110 transition-all shadow-lg">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                    <p className="text-white font-bold font-lurpak-regular text-sm md:text-base">Watch Demo Video</p>
                  </div>
                </div>
              </button>
            ) : (
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/aKRGf_1Emq0?autoplay=1&mute=1&rel=0"
                  title="Hands Free Cooking Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

        </div>

        <div className="lg:mt-[300px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-12 md:mb-16 text-center leading-tight tracking-tight">
            Food Blogs and their readers love it
          </h2>
          <Stats />
        </div>
      </div>
    </section>
  );
}
