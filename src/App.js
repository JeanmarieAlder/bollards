import React, {useState} from 'react';
import BollardCardList from './list/BollardCardList';
import BollardCardListFiltered from './list/BollardCardListFiltered';
import Header from './Header';
import { bollards } from './list/bollards';
import SearchBox from './list/SearchBox';

function App() {
    const [bollardList, setBollardList] = useState(bollards);
    const [searchField, setSearchField] = useState('');

    const onSearchInput = (event) => {
        const searchValue = event.target.value;
        setSearchField(searchValue);
    };
    const filtered = searchField !== '';
    console.log(filtered);
    let filteredBollards = [];

    if(filtered){
        //look for numbers first, then name, then comment
        filteredBollards[0] = bollardList.filter(bollard => {
            return (
                bollard.number.toLowerCase().includes(searchField.toLowerCase())
            );
        });
        filteredBollards[1] = bollardList.filter(bollard => {
            return (
                bollard.name.toLowerCase().includes(searchField.toLowerCase())
            );
        });
        filteredBollards[2] = bollardList.filter(bollard => {
            return (
                bollard.comment.toLowerCase().includes(searchField.toLowerCase())
            );
        });
    }

    return (
        <div>
            <Header></Header>
            <SearchBox onSearchInput={onSearchInput}/>
            {
                filtered ? <BollardCardListFiltered bollards={filteredBollards} /> : <BollardCardList bollards={bollards} />
            }
        </div>
    );
}

export default App;