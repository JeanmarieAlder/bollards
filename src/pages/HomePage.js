import React, { useEffect, useState } from 'react';
import BollardCardList from "../list/BollardCardList"
import BollardCardListFiltered from "../list/BollardCardListFiltered"
import SearchBox from "../list/SearchBox"
import { fetchDataApi } from '../utils/FetchData';

const HomePage = () => {

    const [bollardsList, setBollardsList] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetchDataApi('bollards/list', setBollardsList);
    }, [])

    const onSearchInput = (event) => {
        const searchValue = event.target.value;
        setSearchField(searchValue);
    };
    const filtered = searchField !== '';
    let filteredBollards = [];

    if(filtered){
        //look for numbers first, then name, then comment
        filteredBollards[0] = bollardsList.filter(bollard => {
            return (
                (bollard.b_number + bollard.b_letter).toLowerCase().includes(searchField.toLowerCase())
            );
        });
        filteredBollards[1] = bollardsList.filter(bollard => {
            return (
                bollard.b_name.toLowerCase().includes(searchField.toLowerCase())
            );
        });
    }

    return (
        <div className='home-page-div'>
            <SearchBox onSearchInput={onSearchInput}/>
            {
                filtered ? <BollardCardListFiltered bollards={filteredBollards} /> : <BollardCardList bollards={bollardsList} />
            }
        </div>
    );
};

export default HomePage;