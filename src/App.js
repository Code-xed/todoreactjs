import './App.css';
import React, { useState } from 'react';

import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Foot from './Components/RV/Foot.js';
import UserCard from './Components/RV/UserCard.js';

function App() {
  
  const [ham, setHam] = useState(false);
  
  return (
    <>
      <Header ham={ham} setHam={setHam}/>
      <Content />
      <UserCard />
      <div className="flex flex-col p-4 text-center text-bold text-2xl space-y-4 rounded-2xl">
        <div className="min-h-[25vh] bg-prim1">Prim1</div>
        <div className="min-h-[25vh] bg-prim2">Prim2</div>
        <div className="min-h-[25vh] bg-prim3">Prim3</div>
        <div className="min-h-[25vh] bg-prim4">Prim4</div>
        <div className="min-h-[25vh] bg-prim5">Prim5</div>
      </div>
      <Foot />
    </>
  );
}

export default App;
