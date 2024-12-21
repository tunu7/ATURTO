const HeroBanner = () => (
  <div
    className="relative flex items-center justify-center text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-8 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mb-16 pb-10 sm:p-6 md:p-8"
    style={{
      backgroundImage: "url('/Coachpromo.jpeg')", // Adjust the path to your image file
      backgroundPosition: "center top", // Position the image at the center top
      backgroundSize: "cover", // Make the image cover the entire area
      backgroundRepeat: "no-repeat", // Prevent tiling of the image
    }}
  >
    {/* Add any content you want inside the HeroBanner here */}
  </div>
);

export default HeroBanner;
