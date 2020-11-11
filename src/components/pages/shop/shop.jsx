import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils'
import { updateCollection } from '../../../redux/shop/shop-actions'

import CollectionsOverview from '../../collections-overview/collections-overview'
import CollectionPage from '../collection/collection'
import WithSpinner from '../../with-spinner/with-spinner'

// Wrapping our collectionos components with our higher order spinner component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
    const unsubscribeFromSnapshot = null
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(updateCollection(collectionsMap))
            setLoading(false)
        })
        return function cleanup() {
            dispatch(updateCollection(unsubscribeFromSnapshot))
        }
    }, [dispatch])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading}  {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

export default ShopPage
