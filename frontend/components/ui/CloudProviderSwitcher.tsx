  // export function CloudProviderSwitcher() {
  //   return (

  //       <label className="label">
  //         AWS
  //         <input type="checkbox" defaultChecked className="toggle" />
  //         Azure
  //       </label>
  //   );
  // }

  'use client';
import { useState } from 'react';

export function CloudProviderSwitcher() {
  const [isAws, setIsAws] = useState(false);

  return (
    <label className="label cursor-pointer gap-3">
      <span className={`label-text font-medium ${!isAws ? 'text-[#0078D4]' : 'opacity-50'}`}>
        Azure
      </span>
      
      <input 
        type="checkbox" 
        checked={isAws} 
        onChange={(e) => setIsAws(e.target.checked)}
        className="toggle"
        style={{
          // Ha be van kapcsolva (AWS), narancs; ha ki (Azure), kék
          backgroundColor: isAws ? '#FF9900' : '#0078D4',
          borderColor: isAws ? '#FF9900' : '#0078D4',
        }}
      />
      
      <span className={`label-text font-medium ${isAws ? 'text-[#FF9900]' : 'opacity-50'}`}>
        AWS
      </span>
    </label>
  );
}