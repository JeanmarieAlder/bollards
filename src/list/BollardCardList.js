import React, { useState } from 'react';
import BollardCard from './BollardCard';

import './BollardCardList.css';

const BollardCardList = ({bollards}) => {

    const lastBollardId = useState(() => {
        const b_id = sessionStorage.getItem('scroll-position-bollard-id')
        return b_id ? b_id : null;
    })


    //https://blog.logrocket.com/implementing-scroll-restoration-in-ecommerce-react-apps/
    const persistScrollPosition = (id) => {
        sessionStorage.setItem("scroll-position-bollard-id", id);
      };

    return (
        <div className='p-2 card-container row text-center justify-content-center'>
            {
                bollards.sort((a, b) => a.b_number - b.b_number)
                .map((bollard, i) => {
                    return (
                        <BollardCard 
                            key={bollards[i].id} 
                            bollard={bollards[i]}
                            onSelectBollard={persistScrollPosition}
                            restoreRef={parseInt(lastBollardId) === bollards[i].id ? lastBollardId : null} />
                    );
                } )
            }
        </div>
    );
}

export default BollardCardList;