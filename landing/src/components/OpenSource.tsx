import { Github, FileText, Mic } from 'lucide-react';

export default function OpenSource() {
  const features = [
    {
      icon: FileText,
      text: 'Works on any CMS',
    },
    {
      icon: Mic,
      text: 'Powered by Google Voice API',
    },
    {
      icon: Github,
      text: 'Free and open source',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-10 md:mb-16 leading-tight tracking-tight">
            Built for every food blog
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 md:px-6 py-3 md:py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon size={20} className="text-brand flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 font-lurpak-regular">{feature.text}</span>
                </div>
              );
            })}
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-lurpak-regular hover:bg-gray-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px]"
          >
            <Github size={20} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
