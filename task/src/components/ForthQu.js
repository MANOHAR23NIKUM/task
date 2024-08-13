// import React, { useState, useCallback } from 'react'

// const ForthQu = () => {
//   const [items] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

//   const handleItemClick = useCallback((item) => {
//     alert(`Clicked on: ${item}`);
//   }, []);


//   const ListItem = React.memo(({ item, onClick }) => {
//     console.log(`Rendering: ${item}`);
//     return (
//       <li onClick={() => onClick(item)}>{item}</li>
//     );
//   });

//   return (
//     <div>
//        {items.map((item) => (
//         <ListItem key={item} item={item} onClick={handleItemClick} />
//       ))}
//     </div>
//   )
// }
// export default ForthQu

import React, { useCallback, useState } from 'react'

const ForthQu = () => {
  const [items]=useState(['Pune','mumbai','Delhi','bangolre']);

  const handlelistClick=useCallback((index)=>{
    console.log(`item ${index} clicked`);
  },[]);

  console.log('listComponents(city) Rendered');
  return (
    <div>
      {items.map((item,index)=>(
        <div key={index} onClick={()=>handlelistClick(item)}>
          {item}

        </div>
      ))

      }
    </div>
  )
}

export default ForthQu
//4)Create a ListComponent that uses the useCallback hook to memoize an event handler (handleItemClick) for a list of items, and observe how it prevents unnecessary function re-creations and re-renders.
