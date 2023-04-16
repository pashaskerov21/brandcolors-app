import React, { useContext, useState } from 'react'
import Search from './Search'
import Brand from './Brand';
import MainContext from '../MainContext';
import LazyLoad from 'react-lazy-load';
import Download from './Download';
import Loader from './Loader';

function Content() {

  const { brands, selectedBrands } = useContext(MainContext)

  return (
    <main>
      <header>
        <Search />
        <Download />
      </header>
      <section className='brands'>
        {
          brands.map(brand => (
            <LazyLoad key={brand.slug} overflow={true} once={false} placeholder={<Loader/>}>
              <Brand brand={brand} />
            </LazyLoad>
          ))
        }
      </section>
    </main>
  )
}

export default Content
