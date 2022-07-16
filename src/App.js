import './App.css';
import React, { useState } from 'react';

import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Foot from './Components/RV/Foot.js';
import SideBar from './Components/SideBar.js';
import UserCard from './Components/RV/UserCard.js';

function App() {
  
  const [ham, setHam] = useState(false);
  const [Title, setTitle] = useState("");
  const [Para, setPara] = useState("");
  
  return (
    <>
    <SideBar ham={false} setHam={setHam} />
    <div className="m-0 p-0 w-[100vw] h-[100vh]">
      <Header ham={ham} setHam={setHam}/>
      <Content />
      {/*<input placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={Title} />
      <input placeholder="Enter Para" onChange={(e) => setPara(e.target.value)} value={Para} />*/}
      {/*<Feat Title={Title.split(" ")} Para={Para} />
      <Footer />*/}
      <UserCard />
      <Foot />
    </div>
    </>
  );
}

export default App;
