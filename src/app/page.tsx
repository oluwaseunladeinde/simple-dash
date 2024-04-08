import Header from "./components/header";
import TopCards from "./components/top-cards";
import BarChart from "./components/bar-chart";
import RecentOrders from "./components/recent-orders";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
