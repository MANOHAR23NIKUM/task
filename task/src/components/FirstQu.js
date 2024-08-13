import React, { createContext, useContext } from 'react'
import { Context } from '../App';

const FirstQu = () => {
  const context = useContext(Context);
  return (
    <div>
      {/* <h2>{context.data}</h2> */}
      <img src={context.img } alt={context.alt} title={context.title} height="200px"/>
    </div>
  );
};

export default FirstQu;
// 1)Task1: Passing Images via Context
// Modify your context to include an image URL. 
// Pass this URL through context and display the image in a child component.