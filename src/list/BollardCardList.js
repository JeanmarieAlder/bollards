import React from 'react';
import BollardCard from './BollardCard';

import './BollardCardList.css';

const BollardCardList = ({bollards}) => {
    return (
        <div className='p-2 card-container row text-center justify-content-center'>
            {
                bollards.sort((a, b) => a.b_number - b.b_number)
                .map((bollard, i) => {
                    return (
                        <BollardCard key={bollards[i].id} bollard={bollards[i]} />
                    );
                } )
            }
        </div>
    );
}

export default BollardCardList;