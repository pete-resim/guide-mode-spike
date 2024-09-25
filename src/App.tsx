import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { GlossaryProvider } from './GlossaryContext';
import Glossary from './Glossary';
import Dashboard from './pages/Dashboard';
import Systems from './pages/Systems';
import Experiences from './pages/Experiences';
import Analytics from './pages/Analytics';

const App: React.FC = () => {
  return (
    <Router>
      <GlossaryProvider>
        <div className="flex h-screen">
        <nav className="w-64 bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6">ReSim</h1>
            <ul>
              <li className="mb-2"><Link to="/" className="text-blue-600 hover:underline">Dashboard</Link></li>
              <li className="mb-2"><Link to="/systems" className="text-blue-600 hover:underline">Systems</Link></li>
              <li className="mb-2"><Link to="/experiences" className="text-blue-600 hover:underline">Experiences</Link></li>
              <li className="mb-2"><Link to="/analytics" className="text-blue-600 hover:underline">Analytics</Link></li>
            </ul>
          </nav>
          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/systems" element={<Systems />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
          <Glossary />
        </div>
      </GlossaryProvider>
    </Router>
  );
};

export default App;