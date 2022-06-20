import React from 'react';
import Match from './Match';

const Matches = ({ matches }) => {
  const data = [];
  matches.matches.map((m) => data.push(m));
  console.log(data);

  return (
    <div className='p-4 my-3'>
      <h3 className='text-2xl font-medium'>
        Matchweek {matches.filters.matchday}
      </h3>
      <div className='w-full p-3 grid md:grid-cols-2'>
        {data?.map((match) => (
          <Match match={match} key={match.id} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
