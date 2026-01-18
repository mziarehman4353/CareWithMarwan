interface Props {
  title: string;
  desc: string;
  price: string;
}

export default function ServiceCard({ title, desc, price }: Readonly<Props>) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
      </div>

      <div className="mt-4 text-sm font-medium text-gray-700">
        Starting from <span className="font-semibold">{price}</span>
      </div>
    </div>
  );
}
