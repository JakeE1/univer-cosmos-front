import React from 'react';
import { useUser } from '../lib/customHooks';
import { Navigate } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";

const Dashboard = () => {
  //const { user, authenticated } = useUser();
//   if (!user || !authenticated) {
//     return <div className="p-16 bg-gray-800 h-screen">
//         <div className="text-2xl mb-4 font-bold text-white">Dashboard</div>
//         <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
//       </div>;
//     // return <Navigate to="/" />;
//   }

  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default Dashboard;