import Card from '../components/Card';

const Fighters = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Fighters</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Fighter 1" image="/fighter1.jpg" description="Record: 10-2-0" />
      <Card title="Fighter 2" image="/fighter2.jpg" description="Record: 8-1-0" />
    </div>
  </div>
);

export default Fighters;
