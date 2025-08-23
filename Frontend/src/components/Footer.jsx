import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-orange-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-orange-600 flex items-center gap-2">
            📚 BookHaven
          </h2>
          <p className="mt-3 text-sm">
            Your trusted destination for discovering amazing books. <br />
            From bestsellers to hidden gems, we help you find your next great
            read.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-pointer hover:text-orange-600 text-xl" />
            </a>

            <a
              href="https://x.com/e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:text-orange-600 text-xl" />
            </a>

            <a
              href="https://www.instagram.com/palak__g08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-orange-600 text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Browse Books</li>
            <li className="hover:underline cursor-pointer">Bestsellers</li>
            <li className="hover:underline cursor-pointer">New Releases</li>
            <li className="hover:underline cursor-pointer">Genres</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Shipping Info</li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for new arrivals & offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © 2025 <span className="font-semibold text-orange-600">BookHaven</span>.
        All rights reserved. Built with ❤️ for book lovers.
      </div>
    </footer>
  );
};

export default Footer;
