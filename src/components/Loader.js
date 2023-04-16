import React from 'react'
import ContentLoader from 'react-content-loader'

function Loader() {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={600}
                height={103}
                viewBox="0 0 600 103"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="53" y="36" rx="0" ry="0" width="1" height="0" />
                <rect x="346" y="33" rx="0" ry="0" width="70" height="55" />
                <rect x="432" y="32" rx="0" ry="0" width="70" height="55" />
                <rect x="517" y="32" rx="0" ry="0" width="70" height="55" />
                <rect x="4" y="47" rx="0" ry="0" width="226" height="27" />
            </ContentLoader>
        </div>
    )
}

export default Loader
