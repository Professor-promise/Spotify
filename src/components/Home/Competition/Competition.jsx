import React, { useState } from 'react';
import Matches from './Matches';
import Standings from './Standings';
import { useNavigate } from 'react-router-dom';
import { englandStandings, englandMatches } from '../../../data';

const Competition = () => {
  const [showMatches, setShowMatches] = useState(false);
  const navigate = useNavigate();
  return (
    <main className='w-full flex flex-col gap-4 rounded-md p-6 bg-background z-10 mt-[-3.3rem] md:mt-[-4.6rem] md:max-w-3xl md:mx-auto border '>
      {englandStandings?.map((standing) => (
        <div key={standing.competition.id}>
          <h2 className='text-[1.1rem] text-textColor font-semibold py-2'>
            <span
              className='border-b-[.2rem] border-blue-400 cursor-pointer hover:bg-blue-400'
              onClick={() => navigate('/')}
            >
              All Competitions{' '}
            </span>
            <span className='text-zinc-600 font-normal ml-2'>
              / {standing.competition.name}
            </span>
          </h2>
          <h2 className='text-blue-400 font-semibold text-[1.6rem]'>
            {standing.competition.name}
          </h2>
          <div className='flex justify-around mt-3 bg-orange-500 cursor-pointer text-white '>
            <h3
              className={
                !showMatches
                  ? 'text-xl uppercase font-semibold border-b-4 border-white p-4'
                  : 'text-xl uppercase font-semibold p-4'
              }
              onClick={() => setShowMatches(false)}
            >
              Standing
            </h3>
            <h3
              className={
                showMatches
                  ? 'text-xl uppercase font-semibold border-b-4 border-white p-4'
                  : 'text-xl uppercase font-semibold p-4'
              }
              onClick={() => setShowMatches(true)}
            >
              Matches
            </h3>
          </div>
          {showMatches ? (
            <>
              {englandMatches?.map((matches) => (
                <Matches key={matches.competition.id} matches={matches} />
              ))}
            </>
          ) : (
            <Standings standing={standing} />
          )}
        </div>
      ))}
    </main>
  );
};

export default Competition;
