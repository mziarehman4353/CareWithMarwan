interface Props {
  title: string;
  desc: string;
  price: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  desc,
  price,
  features = [],
}: Readonly<Props>) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 flex-grow">{desc}</p>

      <div className="mt-4">
        <p className="text-xl font-bold text-gray-900">{price}</p>

        {features.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
      </div>

      <button className="mt-6 rounded-lg border border-gray-300 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Enquire Now
      </button>
    </div>
  );
}
