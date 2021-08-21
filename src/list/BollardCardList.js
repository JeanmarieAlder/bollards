import React from 'react';
import BollardCard from './BollardCard';

import './BollardCardList.css';

const BollardCardList = ({bollards}) => {
    return (
        <div className='p-5 card-container row text-center justify-content-center'>
            {
                bollards.map((bollard, i) => {
                    return (
                        <BollardCard key={bollards[i].id} bollard={bollards[i]} />
                    );
                } )
            }
        </div>
    );
}

export default BollardCardList;