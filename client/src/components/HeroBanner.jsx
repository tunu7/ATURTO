const HeroBanner = () => (
  <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white" style={{ backgroundImage: "url('/promo.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <h1 className="text-4xl font-bold text-center z-10">
      Welcome to Aturto MMA
    </h1>
  </div>
);

export default HeroBanner;
