import React from 'react';
import CountButton from './CountButton/CountButton';
import SearchBar from './SearchBar/SearchBar';

const products = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard',
];




const App = () => {

    return (
        <div>
            <SearchBar products={products}/>
            <SearchBar products={
                ['bike paste',
                'bike brush',
                'car wash',
                'child floss',
                'desert guard',]
            }/>
        </div>
    )
}

export default App;