import React, { useContext, useEffect } from 'react'
import { useParams,Link,useHistory } from 'react-router-dom'
import MainContext from '../MainContext';
import Brand from './Brand';
import LazyLoad from 'react-lazy-load';
import Download from './Download';
import {BsArrowLeft} from 'react-icons/bs'
import Loader from './Loader';

function Collection() {
    const { slugs } = useParams();
    const history = useHistory()
    const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext)


    const clearSelectedBrands = () => {
     setSelectedBrands([])
     history.push('/')   
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

    

    return (
        <main>
            <header>
                <Link to="/" onClick={clearSelectedBrands}>
                    <button className='back-button'>
                        <BsArrowLeft/>
                        <span>All colors</span>
                    </button>
                </Link>
                <Download />
            </header>
            <section className='brands'>
                {
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        return (
                            (
                                <LazyLoad key={brand.slug} overflow={true} once={false} placeholder={<Loader/>}>
                                    <Brand brand={brand} />
                                </LazyLoad>
                            )
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Collection
