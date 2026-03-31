import { Code, Mic, Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Code,
      title: 'Paste 3 lines of code',
      description: 'Drop it into your recipe template',
    },
    {
      icon: Mic,
      title: 'Voice control activates',
      description: 'Speech recognition via the Web Speech API built into supporting browsers',
    },
    {
      icon: Check,
      title: 'Recipes become handsfree',
      description: 'Works instantly on every recipe',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-12 md:mb-20 text-center leading-tight tracking-tight">
            Add it in minutes
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-block mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
                      <Icon size={28} className="text-brand md:w-8 md:h-8" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-lurpak-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 font-lurpak-light">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xl">
            <pre className="text-xs sm:text-sm md:text-base text-gray-100 font-mono">
              <code>{`<script src="handsfree-cooking.iife.js"></script>

<handsfree-cooking
  lang="en"
  steps-selector=".recipe-step"
  ingredients-selector="#ingredients"
  instructions-selector="#instructions"
></handsfree-cooking>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
