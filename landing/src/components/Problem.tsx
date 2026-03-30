import { X } from 'lucide-react';

export default function Problem() {
  const problems = ['Messy hands', 'Screens locking mid-recipe'];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
            Your recipes are made for reading. Not for cooking.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-lurpak-light mb-10 md:mb-16 leading-relaxed">
            Your readers can't use their hands to navigate your recipes.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 md:p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <X size={20} className="text-red-600" />
                </div>
                <p className="text-base md:text-lg text-gray-700 font-lurpak-regular text-left">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
