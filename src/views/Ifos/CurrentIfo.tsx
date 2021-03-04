import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Buy BNB tokens')}</li>
            <li>{TranslateString(598, 'Wait for the sale to start')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://exchange.pancakeswap.finance/#/swap" mr="16px">
              {TranslateString(1060, 'Buy BNB')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(602, 'While the sale is live, press the Buy button and input the amount of BNB')}</li>
            <li>{TranslateString(602, 'Confirm the transaction in your wallet')}</li>
            <li>{TranslateString(602, 'Min amount 0.1 BNB')}</li>
            <li>{TranslateString(602, 'Max Amount 100 BNB')}</li>
            <li>{TranslateString(602, 'MANY Tokens will be credited to your account  instantly')}</li>
          </List>

          <Text as="div" pt="16px">
            <Button as="a" variant="secondary" href="">
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <Image src="/images/ifobackground.png" alt="ifo bunny" width={436} height={406} responsive />
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
