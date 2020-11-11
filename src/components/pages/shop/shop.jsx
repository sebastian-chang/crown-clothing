import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils'
import { updateCollection } from '../../../redux/shop/shop-actions'

import CollectionsOverview from '../../collections-overview/collections-overview'
import CollectionPage from '../collection/collection'

const ShopPage = ({ match }) => {
    const unsubscribeFromSnapshot = null
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(updateCollection(collectionsMap))
        })
        return function cleanup() {
            dispatch(updateCollection(unsubscribeFromSnapshot))
        }
    }, [dispatch])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage
