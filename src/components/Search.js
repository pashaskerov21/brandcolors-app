import React, { useContext } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../MainContext'

function Search() {

    const {searh, setSearch} = useContext(MainContext);

    return (
        <div className='search'>
            <GrSearch />
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Brands' />
        </div>
    )
}

export default Search
