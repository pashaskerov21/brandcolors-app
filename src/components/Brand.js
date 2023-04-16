import React, { useContext } from 'react'
import { getContrastYIQ } from '../Helpers';
import MainContext from '../MainContext';
import ClipboardButton from 'react-clipboard.js';
import { MdContentCopy } from 'react-icons/md'


function Brand({ brand, }) {

  const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }

  const setColor = (color) => {
    setCopied(color)
  }

  return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color,i) => (
          <ClipboardButton key={i} data-clipboard-text={`#${color}`} onSuccess={() => setColor(color)} component={'button'} style={{ '--bg-color': `#${color}`, '--text-color': `${getContrastYIQ(color)}` }}>
            <div  className='icon'><MdContentCopy /></div><span>{color}</span>
          </ClipboardButton>

        ))}
      </div>
    </div>
  )
}

export default Brand
