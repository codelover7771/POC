import React, { useState, useEffect } from 'react';

export default function DataTable({ data }) {
  const [selectedRows, setSelectedRows] = useState([]);


  return (
    <div className="w-full">
      <table className="table">
        <thead>
          <tr>
            <th className="p-3 text-center">Activities</th>
            <th className="p-3 text-center">Accountable</th>
            <th className="p-3 text-center">Artifact</th>
            <th className="p-3 text-center">Due Date</th>
            <th className="p-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.status.map((accountable, index) => (
            <tr key={index}>
              <td className="p-3 text-center nowrap" style={{ width: '20%' }}>
                <label className="checkbox-inline">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index) || data.activities[index].completed}
                   
                  />
                  {data.activities[index].activity}
                </label>
              </td>
              <td className="p-3 text-center nowrap" style={{ width: '20%' }}>{data.accountable[index]}</td>
              <td className="p-3 text-center nowrap" style={{ width: '20%' }}>{data.artifact[index]}</td>
              <td className="p-3 text-center nowrap" style={{ width: '20%' }}>{data.due_date[index]}</td>
              <td className="p-3 text-center nowrap" style={{ width: '20%' }}>{data.status[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
