import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SlotMachine } from './components/slots/SlotMachine';
import { Skull, Coins } from 'lucide-react';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                  <h1 className="text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                      DirtyHabits Gameroom
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400">Where Fortune Favors the Bold</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all cursor-pointer group">
                    <Skull className="w-12 h-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-bold mb-2">Day of the Dead Slots</h2>
                    <p className="text-gray-400">Spin the reels of fate in our Mexican-themed slot machine.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all cursor-pointer group">
                    <Coins className="w-12 h-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-bold mb-2">Golden Toad Fishing</h2>
                    <p className="text-gray-400">Coming soon! Cast your line and reel in massive rewards.</p>
                  </div>
                </div>
              </div>
            } />
            <Route path="/slots" element={<SlotMachine />} />
            <Route path="/fishing" element={
              <div className="text-center text-gray-400 mt-12">
                <h2 className="text-2xl font-bold mb-4">Golden Toad Fishing</h2>
                <p>Coming soon! Get ready for an exciting fishing adventure.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;