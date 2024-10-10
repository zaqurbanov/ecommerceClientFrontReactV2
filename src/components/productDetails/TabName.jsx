import React from 'react'

const TabName = ({name,handleSelectedTab,selectedTab}) => {
  
    return (
    <p className={`uppercase w-36 h-10 text-center flex justify-center items-center border custom-border-radius text-muted text-sm cursor-pointer hover:bg-blue-700 hover:text-white ${selectedTab ==name ? "bg-blue-800 text-white font-semibold" : ''}` } onClick={()=>handleSelectedTab(name)}>
      {name}
    </p>
  )
}

export default TabName
