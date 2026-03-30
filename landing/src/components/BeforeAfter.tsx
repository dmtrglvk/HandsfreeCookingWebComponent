import { X, Check, Smartphone, MousePointer, Volume2, Globe } from 'lucide-react';

export default function BeforeAfter() {
  const before = ['Scrolling', 'Screen locking', 'Interruptions'];

  const after = [
    { icon: Smartphone, title: 'No screen lock', description: 'Keep your screen on while you cook' },
    { icon: MousePointer, title: 'No scrolling', description: 'Navigate with your voice' },
    { icon: Volume2, title: 'No interruptions', description: 'Stay in the flow from start to finish' },
    { icon: Globe, title: 'No app required', description: 'Works directly in the browser' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border-2 border-gray-200">
              <h3 className="text-xl md:text-2xl font-lurpak-bold text-gray-900 mb-6 md:mb-8">Before</h3>
              <div className="space-y-4 md:space-y-5">
                {before.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X size={16} className="text-red-600" />
                    </div>
                    <p className="text-base md:text-lg text-gray-700 font-lurpak-regular">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand/5 rounded-xl md:rounded-2xl p-6 md:p-10 border-2 border-brand/20">
              <h3 className="text-xl md:text-2xl font-lurpak-bold text-gray-900 mb-6 md:mb-8">After</h3>
              <div className="space-y-4 md:space-y-5">
                {after.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                        <Check size={16} className="text-brand" />
                      </div>
                      <div>
                        <p className="text-base md:text-lg text-gray-900 font-lurpak-regular">{item.title}</p>
                        <p className="text-sm text-gray-500 font-lurpak-light">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
