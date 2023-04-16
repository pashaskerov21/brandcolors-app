import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import { FiLink2 } from 'react-icons/fi'
import { MdDownload } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Download() {

    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)
    const [downloadURL, setDownloadURL] = useState()
    const [cssMethod, setCssMethod] = useState('css');

    useEffect(() => {
        if (selectedBrands.length > 0) {

            let output = '';
            switch (cssMethod) {
                case 'css':
                    output += ':root{\n'
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `--color-${slug}-${key}: #${color};\n`
                        })
                    })
                    output += '}'
                    break;

                case 'scss':

                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })

                    break;
                case 'less':

                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`
                        })
                    })

                    break;

            }




            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob)
            setDownloadURL(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadURL('')
            }
        }
    }, [selectedBrands, cssMethod])



    return (

        <div className={`download ${selectedBrands.length > 0 ? 'opacity-1' : ''}`}>
            <div className="actions">
                <select onChange={(e) => setCssMethod(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`brands.${cssMethod}`} href={downloadURL}>
                    <MdDownload />
                </a>

                <Link to={`/collection/${selectedBrands.join(',')}`}>
                    <button>
                        <FiLink2 />
                    </button>
                </Link>
            </div>
            <div onClick={() => { setSelectedBrands([]) }} className='selected'>
                <button><GrClose /></button>
                <span>
                    {selectedBrands.length} brands collected
                </span>
            </div>
        </div>
    )
}

export default Download



