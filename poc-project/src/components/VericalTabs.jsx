import React, { useState } from 'react';

const VerticalTabs = ({ currentRoute }) => {
  const [activeTab, setActiveTab] = useState(currentRoute);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === currentRoute ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleTabClick(currentRoute)}
        >
          {currentRoute}
        </div>
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === 'Benchmark Procurement' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleTabClick('Benchmark Procurement')}
        >
          Benchmark Procurement
        </div>
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === 'Brief Alignment' ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleTabClick('Brief Alignment')}
        >
          Brief Alignment
        </div>
      </div>
      <div className="w-3/4">
        {activeTab === currentRoute && (
          <div className="p-4">Content for {currentRoute}</div>
        )}
        {activeTab === 'Benchmark Procurement' && (
          <div className="p-4">Content for Benchmark Procurement</div>
        )}
        {activeTab === 'Brief Alignment' && (
          <div className="p-4">Content for Brief Alignment</div>
        )}
      </div>
    </div>
  );
};

export default VerticalTabs;
