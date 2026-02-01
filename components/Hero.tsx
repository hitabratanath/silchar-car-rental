export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Car Rental in Silchar, Assam
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Your trusted partner for comfortable and reliable rides across Assam
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Now
          </a>
          <a
            href="#features"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
