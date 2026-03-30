export default function Problem() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lurpak-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
            Your recipes are made for scrolling. Not cooking.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-lurpak-light mb-10 md:mb-16 leading-relaxed">
            Your readers can't use their hands to navigate your recipes.
          </p>

          <div className="flex justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="w-[280px] md:w-[300px] bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
                alt="Scrolling through recipe"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-[280px] md:w-[300px] bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
                alt="Phone screen locking"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-[280px] md:w-[300px] bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif"
                alt="Messy hands while cooking"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
