import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ competition }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/competition/${competition.id}`);
  };
  return (
    <div
      className='w-full shadow-lg items-center flex p-4  space-x-4 rounded-md border border-zinc-100 h-36 hover:bg-[whitesmoke] hover:shadow-xl cursor-pointer'
      onClick={handleClick}
    >
      <img src={competition.emblemUrl} alt='' className='h-20' />
      <span className='text-textColor'>
        <h3 className='font-semibold text-lg'>{competition.name}</h3>
        <p className='text-sm font-medium'>{competition.area.name}</p>
      </span>
    </div>
  );
};

export default Card;
