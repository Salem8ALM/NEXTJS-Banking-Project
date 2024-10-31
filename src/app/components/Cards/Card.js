import Link from "next/link";

export default function Card({ title, description, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="text-blue-500 hover:underline font-medium">Learn More</a>
      </Link>
    </div>
  );
}
