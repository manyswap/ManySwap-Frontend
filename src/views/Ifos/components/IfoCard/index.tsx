import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { Card, CardBody, CardRibbon, Button, Text } from '@pancakeswap-libs/uikit'
import { BSC_BLOCK_TIME } from 'config'
import { Ifo, IfoStatus } from 'config/constants/types'
import { saleManyBnb } from 'utils/callHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { useIfoContract, useSaleContract } from 'hooks/useContract'
import UnlockButton from 'components/UnlockButton'
import IfoCardHeader from './IfoCardHeader'
import IfoCardProgress from './IfoCardProgress'
import IfoCardDescription from './IfoCardDescription'
import IfoCardDetails from './IfoCardDetails'
import IfoCardTime from './IfoCardTime'
import IfoCardContribute from './IfoCardContribute'

export interface IfoCardProps {
  ifo: Ifo
}

const StyledIfoCard = styled(Card)<{ ifoId: string }>`
  background-image: ${({ ifoId }) => `url('/images/ifos/${ifoId}-bg.svg')`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 112px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`

const TextBox = styled.input`
  width: 100%;
  background: ${(props) => props.theme.colors.input};
  border: 1;
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  flex: 1;
  border-radius: 8px;
  height: 56px;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  outline: none;
`

const getStatus = (currentBlock: number, startBlock: number, endBlock: number): IfoStatus | null => {
  if (currentBlock < startBlock) {
    return 'coming_soon'
  }

  if (currentBlock >= startBlock && currentBlock <= endBlock) {
    return 'live'
  }

  if (currentBlock > endBlock) {
    return 'finished'
  }

  return null
}

const getRibbonComponent = (status: IfoStatus, TranslateString: (translationId: number, fallback: string) => any) => {
  if (status === 'coming_soon') {
    return <CardRibbon variantColor="textDisabled" text={TranslateString(999, 'Coming Soon')} />
  }

  if (status === 'live') {
    return <CardRibbon variantColor="primary" text={TranslateString(999, 'FINISHED')} />
  }

  return null
}

const IfoCard: React.FC<IfoCardProps> = ({ ifo }) => {
  const {
    id,
    address,
    name,
    subTitle,
    description,
    launchDate,
    launchTime,
    saleAmount,
    raiseAmount,
    cakeToBurn,
    projectSiteUrl,
    currency,
    currencyAddress,
    tokenDecimals,
    releaseBlockNumber,
  } = ifo
  const [state, setState] = useState({
    isLoading: true,
    status: null,
    blocksRemaining: 0,
    secondsUntilStart: 0,
    progress: 0,
    secondsUntilEnd: 0,
    raisingAmount: new BigNumber(0),
    totalAmount: new BigNumber(0),
    startBlockNum: 0,
    endBlockNum: 0,
    tempTextBoxValue: null,
  })
  const { account } = useWallet()
  const contract = useSaleContract(address)

  const currentBlock = useBlock()
  const TranslateString = useI18n()

  const Ribbon = getRibbonComponent('live', TranslateString)

  const onBuyNow = useCallback(async () => {
    console.log('OnBuyNow new contract1 ', state.tempTextBoxValue)

    try {
      await saleManyBnb(contract,state.tempTextBoxValue,account)
      console.log('OnBuy noew contract2 ', state.tempTextBoxValue)
    } catch (error) {
      console.log(error)
    }

    console.log('OnBuy noew clicked3 ', state)
  }, [account , contract, state])

  useEffect(() => {
    const fetchProgress = async () => {
      // const [startBlock, endBlock, raisingAmount, totalAmount] = await makeBatchRequest([
      //   contract.methods.startBlock().call,
      //   contract.methods.endBlock().call,
      //   contract.methods.raisingAmount().call,
      //   contract.methods.totalAmount().call,
      // ])
      // const startBlockNum = parseInt(startBlock as string, 10)
      // const endBlockNum = parseInt(endBlock as string, 10)
      // const status = getStatus(currentBlock, startBlockNum, endBlockNum)
      // const totalBlocks = endBlockNum - startBlockNum
      // const blocksRemaining = endBlockNum - currentBlock
      // // Calculate the total progress until finished or until start
      // const progress =
      //   currentBlock > startBlockNum
      //     ? ((currentBlock - startBlockNum) / totalBlocks) * 100
      //     : ((currentBlock - releaseBlockNumber) / (startBlockNum - releaseBlockNumber)) * 100
      // setState({
      //   isLoading: false,
      //   secondsUntilEnd: blocksRemaining * BSC_BLOCK_TIME,
      //   secondsUntilStart: (startBlockNum - currentBlock) * BSC_BLOCK_TIME,
      //   raisingAmount: new BigNumber(raisingAmount as string),
      //   totalAmount: new BigNumber(totalAmount as string),
      //   status,
      //   progress,
      //   blocksRemaining,
      //   startBlockNum,
      //   endBlockNum,
      //   tempTextBoxValue:''
      // })
    }

    fetchProgress()
  }, [currentBlock, contract, releaseBlockNumber, setState])

  const isActive = state.status === 'live'
  const isFinished = state.status === 'finished'

  return (
    <StyledIfoCard ifoId={id} ribbon={Ribbon} isActive={isActive}>
      <CardBody>
        <IfoCardHeader ifoId={id} name={name} subTitle={subTitle} />
        {/* <IfoCardProgress progress={state.progress} /> */}
        {/* <IfoCardTime
          isLoading={state.isLoading}
          status={state.status}
          secondsUntilStart={state.secondsUntilStart}
          secondsUntilEnd={state.secondsUntilEnd}
          block={isActive || isFinished ? state.endBlockNum : state.startBlockNum}
        /> */}
        {/* {!account && <UnlockButton fullWidth />} */}
        {/* {account && (
          <>
            <TextBox
              value={state.tempTextBoxValue}
              placeholder="Enter amount of BNB"
              onChange={({ target: { value } }) => {
                setState({ ...state, tempTextBoxValue: value })
              }}
            />
            <Text fontSize= "20px">{`You will get ${state.tempTextBoxValue * 220}   MANY Tokens `}</Text>
            <Button fullWidth onClick={() => onBuyNow()}>
              Buy now
            </Button>
          </>
        )} */}
        {/* {(isActive || isFinished) && (
          <IfoCardContribute
            address={address}
            currency={currency}
            currencyAddress={currencyAddress}
            contract={contract}
            status={state.status}
            raisingAmount={state.raisingAmount}
            tokenDecimals={tokenDecimals}
          />
        )} */}
        <IfoCardDescription description={description} />
        <IfoCardDetails
          launchDate={launchDate}
          launchTime={launchTime}
          saleAmount={saleAmount}
          raiseAmount={raiseAmount}
          cakeToBurn={cakeToBurn}
          projectSiteUrl={projectSiteUrl}
          raisingAmount={state.raisingAmount}
          totalAmount={state.totalAmount}
        />
      </CardBody>
    </StyledIfoCard>
  )
}

export default IfoCard
