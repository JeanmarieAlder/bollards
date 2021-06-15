import React from 'react';
import BollardCard from './BollardCard';

import './BollardCardList.css';

const BollardCardList = ({bollards}) => {
    return (
        <div className='bollard-card-list-div'>
            {
                bollards.map((bollard, i) => {
                    return (
                        <BollardCard key={i} bollard={bollards[i]} />
                    );
                } )
            }
        </div>
    );
}

export default BollardCardList;