import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "ATURTO 1",
      image: "/event1.jpg",
      description: "Venue: Sango, Date: April 28, 2023",
      fightDetails: [
        { fighters: "Fighter A vs Fighter B", details: "Main Event" },
        { fighters: "Fighter C vs Fighter D", details: "Co-Main Event" },
      ],
    },
    {
      id: 2,
      title: "Event 2",
      image: "/event2.jpg",
      description: "Venue: ABC Hall, Date: Jan 27, 2024",
      fightDetails: [
        { fighters: "Fighter E vs Fighter F", details: "Main Event" },
        { fighters: "Fighter G vs Fighter H", details: "Co-Main Event" },
      ],
    },
    {
      id: 3,
      title: "Event 3",
      image: "/event3.jpg",
      description: "Venue: DEF Stadium, Date: Feb 10, 2024",
      fightDetails: [
        { fighters: "Fighter I vs Fighter J", details: "Main Event" },
        { fighters: "Fighter K vs Fighter L", details: "Co-Main Event" },
      ],
    },
  ];

  const handleCardClick = (event) => {
    navigate(`/events/${event.id}`, { state: event });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} onClick={() => handleCardClick(event)} className="cursor-pointer">
            <Card title={event.title} image={event.image} description={event.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
