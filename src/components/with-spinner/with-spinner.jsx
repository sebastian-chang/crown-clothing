import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    console.log('whats happening in here', isLoading)
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
      )
  }
  return Spinner
}

export default WithSpinner
