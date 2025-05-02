import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Company Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Company
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/emi-calculator" className="hover:underline">
                  EMI Calculator
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Help Center
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://www.instagram.com/servicemitra.asr/#"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@servicemitra.co.in&su=Service%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <span className="text-sm text-gray-500">
            © 2025{" "}
            <a href="https://servicemitra.co.in" className="hover:underline">
              Service Mitra
            </a>
            . All rights reserved.
          </span>
          <div className="flex space-x-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/servicemitra.asr"
              className="text-gray-400 hover:text-gray-900"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 8 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/servicemitra.asr/"
              className="text-gray-400 hover:text-gray-900"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.77.129 4.621.398 3.675 1.344 2.729 2.29 2.46 3.439 2.403 4.721.015 8.332 0 8.741 0 12c0 3.259.015 3.668.072 4.948.057 1.282.326 2.431 1.272 3.377.946.946 2.095 1.215 3.377 1.272 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.282-.057 2.431-.326 3.377-1.272.946-.946 1.215-2.095 1.272-3.377.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.282-.326-2.431-1.272-3.377-.946-.946-2.095-1.215-3.377-1.272C15.668.015 15.259 0 12 0z" />
                <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 1 1 0 7.998z" />
              </svg>
            </a>

            {/* Website */}
            <a
              href="https://servicemitra.co.in/"
              className="text-gray-400 hover:text-gray-900"
              aria-label="Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
