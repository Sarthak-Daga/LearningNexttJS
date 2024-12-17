export default function Card({ id, title, body }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        {/* Display ID and Title with proper spacing */}
        <h2 className="text-2xl font-semibold text-gray-800">
          <span className="text-gray-600">ID: {id}</span> - {title}
        </h2>
        <p className="mt-2 text-gray-600">{body}</p>
      </div>
    </div>
  );
}
