import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Elderly Care", desc: "Professional care for seniors in the comfort of their homes." },
  { title: "Post-Surgery Care", desc: "Specialized nursing assistance during recovery." },
  { title: "Home Nursing", desc: "Registered nurses for in-home patient care and monitoring." },
  { title: "Medication Management", desc: "Ensuring safe and timely medication routines." },
  { title: "Disability Support", desc: "Compassionate support for individuals with disabilities." },
  { title: "Emergency Nursing", desc: "Reliable and responsive emergency care services." },
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-10 text-center">
        Our Nursing Services
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}
