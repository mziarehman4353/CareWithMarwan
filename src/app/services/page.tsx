import ServiceCard from "@/app/components/ServiceCard";

const services = [
  {
    title: "Elderly Care",
    desc: "Dedicated daily assistance ensuring comfort, dignity, and safety for seniors.",
    price: "$25 / hour",
    features: [
      "Daily living assistance",
      "Health monitoring",
      "Companionship support",
    ],
  },
  {
    title: "Post-Surgery Care",
    desc: "Professional recovery support after hospital discharge.",
    price: "$30 / hour",
    features: [
      "Wound care",
      "Medication supervision",
      "Mobility assistance",
    ],
  },
  {
    title: "Home Nursing",
    desc: "Registered nurses providing medical care at home.",
    price: "$35 / hour",
    features: [
      "Vital monitoring",
      "Clinical procedures",
      "Personalized care plans",
    ],
  },
  {
    title: "Medication Management",
    desc: "Safe and timely medication administration.",
    price: "$20 / visit",
    features: [
      "Dosage supervision",
      "Schedule reminders",
      "Error prevention",
    ],
  },
  {
    title: "Disability Support",
    desc: "Compassionate care for individuals with physical or mental disabilities.",
    price: "$28 / hour",
    features: [
      "Daily activity support",
      "Mobility assistance",
      "Emotional support",
    ],
  },
  {
    title: "Emergency Nursing",
    desc: "Fast and reliable emergency nursing assistance.",
    price: "$50 / visit",
    features: [
      "Immediate response",
      "Critical care support",
      "On-call availability",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Our Nursing Services
          </h1>
          <p className="text-gray-600">
            Professional, reliable, and compassionate nursing services tailored
            to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
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
