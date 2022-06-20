import React from 'react';

const Standings = ({ standing }) => {
  const tableData = [];
  standing.standings.map((m) => {
    return m.table.map((b) => {
      return tableData.push(b);
    });
  });

  return (
    <div className='shadow-lg shadow-zinc-400 border rounded-xl p-4 my-3'>
      <table className='w-full text-zinc-500 '>
        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>Pts</th>
          </tr>
        </thead>

        {tableData.map((data) => (
          <tbody key={data.team.id}>
            <tr className='border-b hover:shadow-lg cursor-pointer font-medium'>
              <td>{data.position}</td>
              <td className='flex gap-2 items-center'>
                <img src={data.team.crestUrl} className='h-8' alt='' />
                <span>{data.team.name}</span>
              </td>
              <td>{data.playedGames}</td>
              <td>{data.won}</td>
              <td>{data.draw}</td>
              <td>{data.lost}</td>
              <td>{data.goalsFor}</td>
              <td>{data.goalsAgainst}</td>
              <td>{data.points}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Standings;
