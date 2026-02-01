export default function Features() {
  const features = [
    {
      title: "24/7 Availability",
      description: "Book anytime, anywhere. Our service is available round the clock for your convenience.",
      icon: "🕐",
    },
    {
      title: "Professional Drivers",
      description: "Experienced and courteous drivers who know Silchar and surrounding areas like the back of their hand.",
      icon: "👨‍✈️",
    },
    {
      title: "Wide Range of Vehicles",
      description: "From sedans to SUVs, choose the perfect vehicle for your journey and group size.",
      icon: "🚗",
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges. Get the best value for your money.",
      icon: "💰",
    },
    {
      title: "Local & Outstation",
      description: "Whether it's a city tour or an outstation trip, we've got you covered.",
      icon: "🗺️",
    },
    {
      title: "Well-Maintained Fleet",
      description: "All our vehicles are regularly serviced and maintained for your safety and comfort.",
      icon: "✨",
    },
    {
      title: "Easy Booking",
      description: "Simple and quick booking process. Just fill the form and we'll get back to you instantly.",
      icon: "📱",
    },
    {
      title: "Customer Support",
      description: "Dedicated customer support team ready to assist you with any queries or concerns.",
      icon: "🤝",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600">
            Experience the best car rental service in Silchar with our premium features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
