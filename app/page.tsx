import CountdownTimer from "./components/CountdownTimer.tsx";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import ItineraryCard from "./components/ItineraryCard";
import PackingTips from "./components/PackingTips";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold mb-4">🌏 3 Mẹ Con Du Hí Đài Loan 2025 </h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjx01TgZS6VLtmG1PzznolQKNk75SV8W35w&s" alt="Đài Loan" className="mx-auto rounded-lg shadow-lg mb-4" />
        <CountdownTimer targetDate="2025-10-04T00:00:00" />
      </section>

      {/* Điều hướng nhanh */}
      <section className="flex justify-center gap-4 py-6">
        <a href="#itinerary" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-blue-600">Lịch Trình</a>
        <a href="#packing" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-green-600">Đồ & Mẹo</a>
      </section>

      {/* Lịch trình */}
      <section id="itinerary" className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center ">Lịch Trình</h2>
        <ItineraryCard />
      </section>

      {/* Đồ cần mang & Mẹo du lịch */}
      <section id="packing" className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Đồ & Mẹo Du Lịch</h2>
        <PackingTips />
      </section>
    </div>
  );
}
