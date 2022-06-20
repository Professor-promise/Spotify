import React from 'react';
import home from '../../img/home.png';
import away from '../../img/away.png';

const Match = ({ match }) => {
  const date = new Date(match.utcDate);

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDay() + 1;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const homeColor = match.score.fullTime.homeTeam;
  const awayColor = match.score.fullTime.awayTeam;

  return (
    <div className='w-full shadow-sm cursor-pointer hover:shadow-xl border-b-[1.2px] border-r-[1.2px] grid grid-cols-4 gap-1 px-3 py-6 font-medium text-zinc-600 text-[.9rem]'>
      <div className='grid col-span-3 gap-4 px-2'>
        <span className='flex items-center gap-3'>
          <img src={home} alt='home' className='h-5' />
          <h4 className='md:text-[.97rem]'>{match.homeTeam.name}</h4>
        </span>
        <span className='flex items-center gap-3'>
          <img src={away} alt='away' className='h-5' />
          <h4 className='md:text-[.97rem]'>{match.awayTeam.name}</h4>
        </span>
      </div>
      <div className='flex justify-between divide-x '>
        <span className='flex justify-between flex-col px-2'>
          <p
            className={
              homeColor > 0
                ? 'text-green-600 text-[1rem] font-semibold'
                : 'text-red-600 text-[1rem] font-semibold'
            }
          >
            {match.score.fullTime.homeTeam}
          </p>
          <p
            className={
              awayColor > 0
                ? 'text-green-600 text-[1rem] font-semibold'
                : 'text-red-600 text-[1rem] font-semibold'
            }
          >
            {match.score.fullTime.awayTeam}
          </p>
        </span>
        <span className='flex justify-around flex-col items-center px-1 mr-2 gap-1'>
          <p className=''>FT</p>
          <p className=' text-[0.8rem]'>{`0${month}/0${day}`}</p>
          <p className=''>{`${hours}:${minutes}`}</p>
        </span>
      </div>
    </div>
  );
};

export default Match;
