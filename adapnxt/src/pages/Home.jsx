import React from 'react';
import './Home.css';
import LeftPart from '../components/LeftPart';
import RightPart from '../components/RightPart';


function Home() {
  return (
    <div className="Dashboard">
      <LeftPart />
      <RightPart />
    </div>
  );
}

export default Home;
