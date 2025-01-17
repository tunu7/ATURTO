import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const EventDetail = () => {
  const { eventId } = useParams(); // Extract event ID from the URL
  const location = useLocation(); // Access the passed state
  const { title, image, description, fightDetails } = location.state;

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{title}</h2>
      <img src={image} alt={title} className="mb-6 w-full h-auto rounded-lg" />
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold mb-4">Fight Details:</h3>
        <ul className="list-disc pl-6">
          {fightDetails.map((fight, index) => (
            <li key={index} className="mb-2">
              <strong>{fight.fighters}</strong>: {fight.details}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDetail;
