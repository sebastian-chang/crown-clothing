import React from 'react'
import { useDispatch } from 'react-redux'

import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../redux/cart/cart-actions'
import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()

    const addToCart = item => {
        dispatch(addItem(item))
    }
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addToCart(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// })

// export default connect(null, mapDispatchToProps)(CollectionItem)

export default CollectionItem