import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { competitions } from '../../data';
// import api from '../api/useAxios';
import Card from './Card';

const Home = () => {
  /*  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await api.get('/competitions');
        setCompetitions(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
      setLoading(false);
    };
    fetchPosts();
  }, []); */

  return (
    <main className='w-full flex flex-col gap-2 rounded-md p-6 bg-background z-10 mt-[-3.3rem] md:mt-[-4.6rem] md:max-w-2xl md:mx-auto border '>
      <h2 className='text-[1.5rem] text-textColor font-semibold'>
        All Competitions
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {competitions?.map((competition) => (
          <Card key={competition.id} competition={competition} />
        ))}
      </div>
    </main>
  );
};

export default Home;
