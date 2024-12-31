import React from 'react';
import ComplaintList from './ComplaintList';
import WelcomeHero from './WelcomeHero';

function Home() {
  return (
    <div className="space-y-8">
      <WelcomeHero />
      <ComplaintList />
    </div>
  );
}

export default Home;