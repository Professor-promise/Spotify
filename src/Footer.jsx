import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col gap-2 font-medium items-center justify-center py-10'>
      <h3 className='text-zinc-500'>
        Built by
        <span className='ml-1 border-b-2 border-blue-400 hover:bg-blue-400 cursor-pointer text-textColor'>
          Umeh Promise Chidubem
        </span>
      </h3>
      <p className='text-sm'>
        Credits:
        <span className='ml-1 border-b-2 border-blue-400 hover:bg-blue-400 cursor-pointer text-textColor'>
          Football data API
        </span>
      </p>
    </div>
  );
};

export default Footer;
