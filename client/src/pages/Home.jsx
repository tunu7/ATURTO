import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';

const Home = () => (
  <div className="relative flex flex-col items-center justify-center text-white px-4 sm:px-4 md:px-6 lg:px-8 w-full h-full">
    <HeroBanner />

    {/* Upcoming Fights Section */}
    <section className="w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
      <h2 className="text-2xl font-semibold text-gray-300 text-center mb-4">Upcoming Fights</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
          <Card title="Fight 1" image="/fight1.jpg" description="Date: Jan 20, 2024" />
          <Card title="Fight 2" image="/fight2.jpg" description="Date: Jan 27, 2024" />
          <Card title="Fight 3" image="/fight3.jpg" description="Date: Feb 10, 2024" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <button className="mt-4 sm:mt-6 ml-28 pl-10 text-gray-300 text-sm hover:text-white transition-all duration-300 text-center">
        View All
      </button>
    </section>

    {/* Photos Section */}
    <section className="w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
      <h2 className="text-2xl font-semibold text-gray-300 text-center mb-4">Photos</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
          <Card title="Photo 1" image="/photo1.jpg" description="PFL 9, 2024: Brendan Loughnane vs Kai Kamaka" />
          <Card title="Photo 2" image="/photo2.jpg" description="PFL 9, 2024: Magomed Umalatov vs Neiman Gracie" />
          <Card title="Photo 3" image="/photo3.jpg" description="PFL 9, 2024: Gabriel Braga vs Timur Khizriev" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <button className="mt-4 sm:mt-6 ml-28 pl-10 text-gray-300 text-sm hover:text-white transition-all duration-300 text-center">
        View All
      </button>
    </section>

    {/* Videos Section */}
    <section className="w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-16">
      <h2 className="text-2xl font-semibold text-gray-300 text-center mb-4">Videos</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
          <Card title="Video 1" image="/video1.jpg" description="Highlight Reel 1" />
          <Card title="Video 2" image="/video2.jpg" description="Highlight Reel 2" />
          <Card title="Video 3" image="/video3.jpg" description="Highlight Reel 3" />
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <button className="mt-4 sm:mt-6 ml-28 pl-10 text-gray-300 text-sm hover:text-white transition-all duration-300 text-center">
        View All
      </button>
    </section>
  </div>
);

export default Home;
