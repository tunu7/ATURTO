const Card = ({ title, image, description }) => (
  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="mt-1 text-xs text-gray-600">{description}</p>
  </div>
);

export default Card;
