import React from 'react';
import { testBatchesData } from '../fixtures/analyticsData';
import { useGlossaryTerms } from '@/useGlossaryTerms';

const Analytics: React.FC = () => {
  useGlossaryTerms(['branch', 'build', 'system']);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Exit Status</th>
                <th className="px-4 py-2 text-left">Branch</th>
                <th className="px-4 py-2 text-left">Build</th>
                <th className="px-4 py-2 text-left">System</th>
                <th className="px-4 py-2 text-left">Execution Time</th>
              </tr>
            </thead>
            <tbody>
              {testBatchesData.map((batch) => (
                <tr key={batch.id}>
                  <td className="border px-4 py-2">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-bold ${
                      batch.exitStatus === 'success' ? 'bg-green-200 text-green-800' :
                      batch.exitStatus === 'failure' ? 'bg-red-200 text-red-800' :
                      'bg-yellow-200 text-yellow-800'
                    }`}>
                      {batch.exitStatus}
                    </span>
                  </td>
                  <td className="border px-4 py-2">{batch.branch}</td>
                  <td className="border px-4 py-2">{batch.buildVersion}</td>
                  <td className="border px-4 py-2">{batch.system}</td>
                  <td className="border px-4 py-2">{new Date(batch.executionTime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Reports</h3>
        <p>Detailed reports and analytics will be displayed here.</p>
      </section>
    </div>
  );
};

export default Analytics;