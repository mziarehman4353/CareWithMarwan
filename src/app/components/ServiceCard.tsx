interface Props {
  title: string;
  desc: string;
}

export default function ServiceCard({ title, desc }: Readonly<Props>) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
