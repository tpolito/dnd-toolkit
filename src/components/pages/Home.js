import React, { useEffect } from 'react';
import meetNewFaces from '../../assets/meetNewFaces.svg'

const Home = () => {
  // Page Title
  useEffect(() => {
    document.title = 'Home | D&D Toolkit';
    // eslint-disable-next-line
  }, []);

  const backGround = {
    background: "linear-gradient(90deg, #1bb6d4 0%, #7D83FF 100%)"
  }

  return (
    <>
    <div className="py-20" style={backGround}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">Digital Toolset for DnD 5th Edition</h2>
        <h3 className="text-2xl mb-8 text-white">Generate unique NPC's, organinze encounters, and more!</h3>

        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">Dive In!</button>
      </div>
    </div>
    
    <section className="container mx-auto px-6 p10">
      <h2 className="text-4xl font-bold text-center text-gray-200 mt-6 mb-8">Features</h2>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-1/2">
          <h4 className="text-3xl text-gray-200 font-bold mb-3">Meet New Faces</h4>
          <p className="text-gray-400 mb-8">Use our NPC Generator to bring a new spice to your game.</p>
        </div>
        <div className="w-1/2">
          <img src={meetNewFaces} alt=""/>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-1/2">
          <img src={meetNewFaces} alt=""/>
        </div>
        <div className="w-1/2">
          <h4 className="text-3xl text-gray-200 font-bold text-right mb-3">Meet New Faces</h4>
          <p className="text-gray-400 text-right mb-8">Use our NPC Generator to bring a new spice to your game.</p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-1/2">
          <h4 className="text-3xl text-gray-200 font-bold mb-3">Meet New Faces</h4>
          <p className="text-gray-400 mb-8">Use our NPC Generator to bring a new spice to your game.</p>
        </div>
        <div className="w-1/2">
          <img src={meetNewFaces} alt=""/>
        </div>
      </div>
    </section>

    <section className="bg-blue-400">
      <div className="container mx-auto px-6 text-center py-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-gray-200">Get Started Now</h2>
        <h3 className="my-4 text-2xl text-gray-200">Immerse your self in our digital tools!</h3>
        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">Dive In</button>
      </div>
    </section>
    </>
  );
};

export default Home;
