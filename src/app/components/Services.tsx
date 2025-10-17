import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    { title: "Elderly Care", desc: "Professional care for seniors in the comfort of their homes." },
    { title: "Post-Surgery Care", desc: "Specialized nursing assistance during recovery." },
    { title: "Home Nursing", desc: "Registered nurses for in-home patient care and monitoring." },
    { title: "Medication Management", desc: "Ensuring safe and timely medication routines." },
    { title: "Disability Support", desc: "Compassionate support for individuals with disabilities." },
    { title: "Emergency Nursing", desc: "Reliable and responsive emergency care services." },
  ];

  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} desc={service.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
