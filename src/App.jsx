import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Proposal from './components/Proposal';
import Footer from './components/Footer';

function App() {
  // ----------------------------------------------------
  // 💖 CHANGE THIS DATE TO YOUR ANNIVERSARY DATE 💖
  // ----------------------------------------------------
  const startDate = '2022-02-14';

  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 font-sans selection:bg-pink-200">
      <Header />
      <Hero startDate={startDate} />
      <Timeline />
      <Proposal />
      <Footer />
    </div>
  );
}

export default App;
