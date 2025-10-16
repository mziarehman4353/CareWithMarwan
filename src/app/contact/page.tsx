export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">
        Contact Us
      </h2>

      <form className="bg-white p-8 rounded-2xl shadow space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg" required />
        <input type="email" placeholder="Email Address" className="w-full border p-3 rounded-lg" required />
        <textarea placeholder="Your Message" rows={5} className="w-full border p-3 rounded-lg" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
