import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import Countdown from 'react-countdown'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/space_Banner Mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/space_Banner Left.svg'), url('/images/space_Banner Right.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // Render a countdown
  return (
    <span>
      {days}D:{hours}H:{minutes}M:{seconds}S
    </span>
  )
}

const Home: React.FC = () => {
  const TranslateString = useI18n()
 

  return (
    <Page>
    <Hero>
      <Heading as="h1" size="xl" mb="24px" color="secondary">
        {TranslateString(576, 'ManySwap')}
      </Heading>
      <Text>{TranslateString(578, 'The #1 AMM and yield farm to give affiliate comissions  on Binance Smart Chain.')}</Text>
    </Hero>
    <div>
      <Cards>
        <FarmStakingCard />
        <CakeStats />
      </Cards>
      
      {/* <Cards>
        <CakeStats />
        <TotalValueLockedCard />
      </Cards> */}
    </div>
  </Page>
  )
}

export default Home
