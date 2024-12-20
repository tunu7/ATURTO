import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';

const Home = () => (
  <>
    <HeroBanner />
    <div className="bg-white mx-6 md:mx-24 lg:mx-28 px-6 md:px-12 lg:px-16 py-8">
      {/* Upcoming Fights Section */}
      <h2 className="text-3xl font-semibold mb-6">Upcoming Fights</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Fight 1" image="/fight1.jpg" description="Date: Jan 20, 2024" />
          <Card title="Fight 2" image="/fight2.jpg" description="Date: Jan 27, 2024" />
          <Card title="Fight 3" image="/fight3.jpg" description="Date: Feb 10, 2024" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <button className="mt-6 bg-transparent text-gray-600 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">
        View All
      </button>

      {/* Photos Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-6">Photos</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Photo 1" image="/photo1.jpg" description="PFL 9, 2024: Brendan Loughnane vs Kai Kamaka" />
          <Card title="Photo 2" image="/photo2.jpg" description="PFL 9, 2024: Magomed Umalatov vs Neiman Gracie" />
          <Card title="Photo 3" image="/photo3.jpg" description="PFL 9, 2024: Gabriel Braga vs Timur Khizriev" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <button className="mt-6 bg-transparent text-gray-600 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">
        View All
      </button>

      {/* Videos Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-6">Videos</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Video 1" image="/video1.jpg" description="Highlight Reel 1" />
          <Card title="Video 2" image="/video2.jpg" description="Highlight Reel 2" />
          <Card title="Video 3" image="/video3.jpg" description="Highlight Reel 3" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <button className="mt-6 bg-transparent text-gray-600 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">
        View All
      </button>
    </div>
  </>
);

export default Home;
