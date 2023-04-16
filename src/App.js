import { useEffect, useState } from "react";
import MainContext from "./MainContext";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import BrandsData from './brands.json'

import './index.scss';
import Copied from "./components/Copied";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Collection from "./components/Collection";


function App() {



  const brandArray = [];
  Object.keys(BrandsData).map(key => {
    brandArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  useEffect(() => {
    setBrands(brandArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }


  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/collection/:slugs">
              <Collection/>
            </Route>
          </Switch>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
