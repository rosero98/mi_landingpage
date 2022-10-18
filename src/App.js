
import React, { useState, useEffect } from 'react';

import './App.css';
import Cover from "./cover/Cover";



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  
  return(
    <>
    
    <div>
      <Cover/>
    </div>
    </>
  );
}

export default App;
