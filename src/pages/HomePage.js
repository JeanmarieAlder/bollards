import React, { useEffect, useState } from 'react';
import BollardCardList from "../list/BollardCardList"
import BollardCardListFiltered from "../list/BollardCardListFiltered"
import SearchBox from "../list/SearchBox"
import { fetchDataApi } from '../utils/FetchData';
import imgMapLink from "../assets/img/map_link.png"
import "./HomePage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [bollardsList, setBollardsList] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [showTitle, setShowTitle] = useState('fade-in')

    useEffect(() => {
        fetchDataApi('bollards/list', setBollardsList);
        setTimeout(() => {
            setShowTitle('');
        }, 100);
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
            <div id="home-page-title-div">
                <p id="home-page-title" className={"home-page-title " + showTitle} >bollards.ch</p>
            </div>
            <div className="map-link-div">
                <Link to={`/map`}>
                    <img className="map-link-image" src={imgMapLink} alt="map-link"></img>
                </Link>
            </div>
            <SearchBox onSearchInput={onSearchInput}/>
            {
                filtered ? <BollardCardListFiltered bollards={filteredBollards} /> : <BollardCardList bollards={bollardsList} />
            }
        </div>
    );
};

export default HomePage;