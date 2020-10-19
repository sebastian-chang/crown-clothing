import React, { useState } from 'react'

import { SHOP_DATA } from './shop-data'
import CollectionPreview from '../../collection/collections'

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview
                    key={id}
                    {...otherCollectionProps}
                    />
                ))
            }
        </div>
    )
}

export default ShopPage
