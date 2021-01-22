import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='black f3'>
        {`${name}, your current entry count is ${entries}`}
      </div> 
    </div>
  );
}

export default Rank;