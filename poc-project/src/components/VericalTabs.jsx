import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const VerticalTabs = ({ menuName }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(()=>{
    setActiveProcess(menuName.name)
  },[menuName])

  const renderTabs = () => {
    if (menuName && menuName.submenu && Array.isArray(menuName.submenu)) {
      return menuName.submenu.map((item, index) => (
        <div
          key={index}
          className={`w-3/4 p-4 cursor-pointer ${
            activeTab === index ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleTabClick(index)}
        >
          {item.name}
        </div>
      ));
    }

    // Return a placeholder or null if the submenu is not available
    return null;
  };

  return (
    <div className="w-full flex justify-center align-items-center">

      <div className='w-1/4'>
        {renderTabs()}
        <div className='py-2 px-4 bg-white'>{activeProcess}</div>
      </div>
      <div className="w-3/4">
        {menuName && menuName.submenu && Array.isArray(menuName.submenu) && (
          <TableData data={menuName.submenu[activeTab]} />
        )}
      </div>
    </div>
  );
};

export default VerticalTabs;
