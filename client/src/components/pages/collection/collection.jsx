import React from 'react'

import './collection.styles.scss'
import CollectionItem from '../../collection-item/collection-item'
import { selectCollection } from '../../../redux/shop/shop-selectors'
import { useSelector } from 'react-redux'

const CollectionPage = ({ match }) => {
  const collection = useSelector(state => selectCollection(match.params.collectionId)(state))
  const { title, items } = collection

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default CollectionPage
