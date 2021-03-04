import { getSaleAddress } from 'utils/addressHelpers'
import { getContract } from 'utils/web3'

import saleAbi from 'config/abi/sale.json'

export const getSaleContract = () => {
  return getContract(saleAbi, getSaleAddress())
}

export default null
