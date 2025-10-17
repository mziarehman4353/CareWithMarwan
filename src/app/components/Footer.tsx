export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-100 to-neutral-200 border-t border-neutral-300 text-neutral-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left - Button Style Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3 text-neutral-900">Quick Links</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            {["Home", "About", "Services", "Media", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium bg-white border border-neutral-400 rounded-full shadow-sm hover:bg-neutral-800 hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer Button */}
          <a
            href="/contact"
            className="mt-4 inline-block px-6 py-2 rounded-full bg-neutral-800 text-white hover:bg-black transition duration-300 text-sm font-medium shadow-sm"
          >
            Join Us
          </a>
        </div>

        {/* Right - Contact Form */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3 text-neutral-900">Get in Touch</h3>
          <form className="flex flex-col md:flex-row gap-3 items-center">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 border border-neutral-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-neutral-500 w-48 md:w-40 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border border-neutral-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-neutral-500 w-48 md:w-40 text-sm"
            />
            <button
              type="submit"
              className="bg-neutral-800 text-white px-5 py-2 rounded-md hover:bg-black transition duration-300 text-sm font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Center - Copyright */}
      <div className="text-center mt-8 text-sm text-neutral-600 border-t border-neutral-300 pt-4">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-neutral-800">CWM — Care with Marwan</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Crafted with ❤️ by{" "}
          <a
            href="https://codewithzia.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 hover:underline"
          >
            CodeWithZia
          </a>
        </p>
      </div>
    </footer>
  );
}
