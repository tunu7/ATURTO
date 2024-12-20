import Card from '../components/Card';

const Events = () => (
  <div className="container mx-auto px-6 py-8">
    {/* Page Title */}
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>

    {/* Events Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        title="Event 1"
        image="/event1.jpg"
        description="Venue: XYZ Arena, Date: Jan 20, 2024"
      />
      <Card
        title="Event 2"
        image="/event2.jpg"
        description="Venue: ABC Hall, Date: Jan 27, 2024"
      />
      <Card
        title="Event 3"
        image="/event3.jpg"
        description="Venue: DEF Stadium, Date: Feb 10, 2024"
      />
    </div>
  </div>
);

export default Events;
