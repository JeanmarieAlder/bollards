import React from 'react';
import BollardCard from './BollardCard';

function BollardCardListFiltered({bollards}) {
    return (
        <div>
            {
                bollards[0].length > 0 ?
                    (
                        <div>
                            <h2>By number:</h2>
                            <div className="p-5 card-container row text-center justify-content-center">
                                {
                                    bollards[0].sort((a,b) => a.b_number - b.b_number)
                                    .map((bollard, i) => {
                                        return (
                                            <BollardCard key={i} bollard={bollard} />
                                        );
                                    } )
                                }
                            </div>
                            
                        </div>
                    ) :
                    null
            }
            {
                bollards[1].length > 0 ?
                    (
                        <div>
                            <h2>By name:</h2>
                            <div className="p-5 card-container row text-center justify-content-center">
                                {
                                    bollards[1].sort((a,b) => a.b_number - b.b_number)
                                    .map((bollard, i) => {
                                        return (
                                            <BollardCard key={i} bollard={bollard} />
                                        );
                                    } )
                                }
                            </div>
                        </div>
                    ) :
                    null
            }
            
        </div>
    );
}

export default BollardCardListFiltered;