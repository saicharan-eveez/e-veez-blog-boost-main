const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">About EVeez</h4>
          <p className="text-sm text-gray-300">
            EVeez is building the future of electric mobility for delivery partners and businesses
            across India, helping reduce pollution and operational costs.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/partner" className="hover:underline">Partner with us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-300">support@eveez.in</p>
          <p className="text-sm text-gray-300">+91-98765-43210</p>
          <p className="text-sm text-gray-300 mt-2">
            © {new Date().getFullYear()} EVeez Electric Mobility
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
