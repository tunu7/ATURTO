const Card = ({ title, image, description }) => (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl mt-2">{title}</h3>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
  
  export default Card;
  