import React, {useState, useEffect} from 'react';
import BollardCardList from './list/BollardCardList';
import BollardCardListFiltered from './list/BollardCardListFiltered';
import Header from './Header';
import SearchBox from './list/SearchBox';
import { fetchDataApi } from './utils/FetchData';

function App() {
    const [bollardsList, setbollardsList] = useState([]);
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
        fetchDataApi('bollards/list', setbollardsList);
    }, [])

    const onSearchInput = (event) => {
        const searchValue = event.target.value;
        setSearchField(searchValue);
    };
    const filtered = searchField !== '';
    console.log(filtered);
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
        <div className='main-div'>
            <Header></Header>
            <main role="main" className="container">
                <SearchBox onSearchInput={onSearchInput}/>
                {
                    filtered ? <BollardCardListFiltered bollards={filteredBollards} /> : <BollardCardList bollards={bollardsList} />
                }
            </main>
            
        </div>
    );
}

export default App;