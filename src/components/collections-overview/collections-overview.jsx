import React from 'react'
import { useSelector } from 'react-redux'

import './collections-overview.styles.scss'
import CollectionPreview from '../collection/collections'
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors'

const CollectionsOverview = () => {
  const collections = useSelector(state => selectCollectionsForPreview(state))
  return(
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          />
        ))
      }
    </div>
  )
}

export default CollectionsOverview
