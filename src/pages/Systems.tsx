import React from 'react';
import { useGlossaryTerms } from '../useGlossaryTerms';

const Systems: React.FC = () => {
  useGlossaryTerms([]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Systems</h2>
      <p>This page is very straightforward and doesn't require any defining of terms.</p>
    </div>
  );
};

export default Systems;