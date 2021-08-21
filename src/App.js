import React, {useState, useEffect} from 'react';
import BollardCardList from './list/BollardCardList';
import BollardCardListFiltered from './list/BollardCardListFiltered';
import Header from './Header';
import SearchBox from './list/SearchBox';

function App() {
    const [bollardsList, setbollardsList] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        async function fetchData() {
            let h = new Headers();
            h.append('Accept', 'application/json');
            var res = await fetch('http://localhost:5000/api/v1/bollards/list', {headers: h});
            var resJson = await res.json();
            setbollardsList(resJson);
        };
        fetchData();
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
                bollard.number.toLowerCase().includes(searchField.toLowerCase())
            );
        });
        filteredBollards[1] = bollardsList.filter(bollard => {
            return (
                bollard.name.toLowerCase().includes(searchField.toLowerCase())
            );
        });
        filteredBollards[2] = bollardsList.filter(bollard => {
            return (
                bollard.comment.toLowerCase().includes(searchField.toLowerCase())
            );
        });
    }

    return (
        <div>
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