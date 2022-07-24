import './App.css';
import React, { useState } from 'react';

import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Foot from './Components/RV/Foot.js';
import UserCard from './Components/RV/UserCard.js';
import Calculator from './Components/Calculator.js';

function App() {
  
  const [ham, setHam] = useState(false);
  const [Title, setTitle] = useState("");
  const [Para, setPara] = useState("");
  
  return (
    <>
    {/*<div className="m-0 p-0 w-[100vw] h-[100vh]">*/}
      <Header ham={ham} setHam={setHam}/>
      <Content />
      {/*<input placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={Title} />
      <input placeholder="Enter Para" onChange={(e) => setPara(e.target.value)} value={Para} />*/}
      {/*<Feat Title={Title.split(" ")} Para={Para} />
      <Footer />*/}
      <UserCard />
      <div className="flex flex-col px-4 rounded-2xl">
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
