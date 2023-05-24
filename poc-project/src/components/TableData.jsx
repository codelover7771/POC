import React from 'react';

export default function DataTable({ data }) {
  return (
    <div className='w-full'>
      <table className="table">
        <thead>
          <tr>
            <th className="p-3 text-center">Activities</th>
            <th className="p-3 text-center"> Accountable</th>
            <th className="p-3 text-center">Artifact</th>
            <th className="p-3 text-center">Due Date</th>
            <th className="p-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.accountable.map((accountable, index) => (
            <tr key={index}>
              <td className="p-3 text-center nowrap">{data.activities[index] }</td>
              <td className="p-3 text-center nowrap">{accountable}</td>
              <td className="p-3 text-center nowrap">{data.artifact[index]}</td>
              <td className="p-3 text-center nowrap">{data.due_date[index]}</td>
              <td className="p-3 text-center nowrap">{data.status[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
