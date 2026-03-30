import { Heart, Clock, TrendingUp, Star, Globe } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Better user experience',
      description: 'Your readers cook with confidence, not frustration',
    },
    {
      icon: Clock,
      title: 'Increased time on recipes',
      description: 'Users stay engaged through the entire recipe',
    },
    {
      icon: Star,
      title: 'Stand out from other blogs',
      description: "Offer something your competitors don't have",
    },
    {
      icon: Globe,
      title: 'More accessible content',
      description: 'Make your recipes usable for everyone',
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-12 md:mb-20 text-center leading-tight tracking-tight">
            Why food bloggers use Hands Free Cooking
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-5 md:gap-6 p-5 md:p-8 rounded-xl md:rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-brand md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-lurpak-bold text-gray-900 mb-2 md:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-lurpak-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
