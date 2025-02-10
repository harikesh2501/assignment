import React from 'react';
import './Home.css';
import LeftPart from '../components/Leftpart';
import RightPart from '../components/Rightpart';


function Home() {
  return (
    <div className="Dashboard">
      <LeftPart />
      <RightPart />
    </div>
  );
}

export default Home;
