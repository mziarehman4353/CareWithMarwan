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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition duration-300">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {desc}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm text-gray-500">Starting from</span>
        <span className="text-lg font-semibold text-gray-900">
          {price}
        </span>
      </div>
    </div>
  );
}
