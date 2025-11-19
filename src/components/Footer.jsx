import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">NAVI COURIER SERVICES</h2>
          <p>Delivering excellence in logistics solutions entire PAN India.</p>
          <p className="mt-2">Your reliable partner for domestic shipping services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/faq" className="hover:underline font-semibold">FAQs</Link></li>
            <li><Link to="/about" className="hover:underline font-semibold">About Us</Link></li>
            <li><Link to="/contect" className="hover:underline font-semibold">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:underline font-semibold">Privacy & Policy</Link></li>
            <li><Link to="/polcy" className="hover:underline font-semibold">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>123 Logistics Street, Cityname,</p>
          <p>Country-PIN</p>
          <p className="mt-2">Email: info@navicourier.com</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Services</h2>
          <ul className="space-y-1">
            <li><span className="font-semibold">E-Commerce Delivery</span></li>
            <li><span className="font-semibold">Pickup & Drop</span></li>
            <li><span className="font-semibold">Packaging</span></li>
            <li><span className="font-semibold">Domestic Services</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
        <p>Copyright@2025, Developed by First Track Solution Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
