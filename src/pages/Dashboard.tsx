import React from 'react';
import { useGlossaryTerms } from '../useGlossaryTerms';

const Dashboard: React.FC = () => {
  useGlossaryTerms(['dashboard', 'experience']);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to the ReSim Dashboard. Here you can get an overview of your systems and experiences.</p>
    </div>
  );
};

export default Dashboard;