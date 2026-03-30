import { Mic } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 md:mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand/10 rounded-2xl flex items-center justify-center">
              <Mic size={36} className="text-brand md:w-10 md:h-10" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-6 md:mb-10 leading-tight tracking-tight">
            Make your recipes work in real kitchens
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-lurpak-light leading-relaxed max-w-4xl mx-auto">
            The <code className="text-gray-800 font-lurpak-regular">&lt;handsfree-cooking&gt;</code> web component
            lets readers navigate recipes hands-free on your site using the browser&apos;s Web Speech API.
          </p>
        </div>
      </div>
    </section>
  );
}
