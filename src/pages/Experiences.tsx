import React from 'react';
import { experiencesData } from '../fixtures/experiencesData';
import { useGlossaryTerms } from '../useGlossaryTerms';

const ExperienceTable: React.FC = () => {
  useGlossaryTerms(['experience', 'system', 'testSuite', 'tag']);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">System</th>
              <th className="px-4 py-2 text-left">Test Suites</th>
              <th className="px-4 py-2 text-left">Tags</th>
            </tr>
          </thead>
          <tbody>
            {experiencesData.map((experience) => (
              <tr key={experience.id}>
                <td className="border px-4 py-2">{experience.name}</td>
                <td className="border px-4 py-2">{experience.system}</td>
                <td className="border px-4 py-2">{experience.testSuites.join(', ')}</td>
                <td className="border px-4 py-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

const Experiences: React.FC = () => {
  useGlossaryTerms(['experience']);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experiences</h2>
      <ExperienceTable />
    </div>
  );
};

export default Experiences;