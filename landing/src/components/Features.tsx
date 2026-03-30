import { Lock, MousePointer, Zap, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Lock,
      title: 'No screen lock',
      description: 'Keep your screen on while you cook',
    },
    {
      icon: MousePointer,
      title: 'No scrolling',
      description: 'Navigate with your voice',
    },
    {
      icon: Zap,
      title: 'No interruptions',
      description: 'Stay in the flow from start to finish',
    },
    {
      icon: Smartphone,
      title: 'No app required',
      description: 'Works directly in the browser',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block mb-4 md:mb-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Icon size={24} className="text-brand md:w-7 md:h-7" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-lurpak-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-lurpak-light leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
