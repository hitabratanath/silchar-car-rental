export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Silchar Car Rental</h3>
            <p className="text-gray-400">
              Your trusted partner for comfortable and reliable rides across Silchar and Assam.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>📧 info@silcharcars.com</li>
              <li>📍 Silchar, Assam, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Silchar Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
