import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Elderly Care",
      desc: "Professional care for seniors in the comfort of their homes.",
      price: "From $25/hour",
      features: ["Daily assistance", "Companionship", "Health monitoring"],
    },
    {
      title: "Post-Surgery Care",
      desc: "Specialized nursing assistance during recovery.",
      price: "From $40/hour",
      features: ["Wound care", "Medication support", "Recovery monitoring"],
    },
    {
      title: "Home Nursing",
      desc: "Registered nurses for in-home patient care and monitoring.",
      price: "From $50/hour",
      features: ["Vital checks", "IV therapy", "Professional nurses"],
    },
    {
      title: "Medication Management",
      desc: "Ensuring safe and timely medication routines.",
      price: "From $20/hour",
      features: ["Dose scheduling", "Prescription tracking"],
    },
    {
      title: "Disability Support",
      desc: "Compassionate support for individuals with disabilities.",
      price: "From $30/hour",
      features: ["Personal care", "Mobility assistance", "Daily routines"],
    },
    {
      title: "Emergency Nursing",
      desc: "Reliable and responsive emergency care services.",
      price: "From $80/hour",
      features: ["24/7 availability", "Rapid response", "Critical care"],
    },
  ];

  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              desc={service.desc}
              price={service.price}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
