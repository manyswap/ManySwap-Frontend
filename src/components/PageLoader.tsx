import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap-libs/uikit'
import Loader from 'react-loader-spinner'
import Page from './layout/Page'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000} />
    </Wrapper>
  )
}

export default PageLoader
