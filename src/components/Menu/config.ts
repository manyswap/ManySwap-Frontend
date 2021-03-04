import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: `https://exchange.manyswap.io/?r=${window.localStorage.getItem('refer')}`,
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Public Sale',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Document',
    icon: 'MoreIcon',
    href: 'https://manyswap.io/IFO_GUIDE.pdf',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://info.manyswap.io/',
   
  },
]

export default config
