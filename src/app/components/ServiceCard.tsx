interface Props {
  title: string;
  desc: string;
  price: string;
  features?: string[]; // ✅ optional
}

export default function ServiceCard({
  title,
  desc,
  price,
  features,
}: Readonly<Props>) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>

        {features && (
          <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc list-inside">
            {features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 text-sm font-medium text-gray-700">
        Starting from{" "}
        <span className="font-semibold text-gray-900">{price}</span>
      </div>
    </div>
  );
}
