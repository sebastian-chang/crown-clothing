import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HKrXNIl5ZwwSntzIKpLq9Du9Y3lQqI3pFlj3X2EQ8031Ncx6e7ajAHS0HRGvjA41CZyY8YlQSv4N1fZmqUauDLd006l08PQR1'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      }
    })
    .then(res => {
      alert('Payment successful!')
    })
    .catch(err => {
      console.log('Payment error: ', JSON.parse(err))
      alert('There was an issue with your payment. Please be sure to use the credit card information provided.')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now!'
      name='Sebs Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
