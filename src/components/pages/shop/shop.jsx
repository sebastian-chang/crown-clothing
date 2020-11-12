import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

// import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils'
import { fetchCollectionsStartAsync } from '../../../redux/shop/shop-actions'

import CollectionsOverview from '../../collections-overview/collections-overview'
import CollectionPage from '../collection/collection'
import WithSpinner from '../../with-spinner/with-spinner'

// Wrapping our collectionos components with our higher order spinner component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
    // const unsubscribeFromSnapshot = null
    const isFetching = useSelector(state => state.shop.isFetching)
    const isCollectionsLoaded = useSelector(state => !!state.shop.collections)
    const dispatch = useDispatch()

    useEffect(() => {
        // Moved to shop reducer using Redux Thunk
        // const collectionRef = firestore.collection('collections')

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     dispatch(updateCollection(collectionsMap))
        //     setLoading(false)
        // })
        // return function cleanup () {
        //     dispatch(updateCollection(unsubscribeFromSnapshot))
        // }
        dispatch(fetchCollectionsStartAsync())
    }, [dispatch])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching}  {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        </div>
    )
}

export default ShopPage
