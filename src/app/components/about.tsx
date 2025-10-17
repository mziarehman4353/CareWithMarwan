export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-10 text-center scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          About Us
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12">
          At <span className="font-semibold text-blue-600">CWM Care with Marwan</span>, 
          we believe nursing is more than a profession it’s an act of compassion and dedication. 
          Our team delivers high-quality nursing services that prioritize 
          patient comfort, respect, and recovery.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-left">
          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted leader in nursing and home care — known for 
              compassion, reliability, and excellence — improving quality of life 
              for every individual we serve.
            </p>
          </div>

          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver personalized and respectful nursing care that empowers patients, 
              supports families, and upholds dignity at every stage of health and healing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
