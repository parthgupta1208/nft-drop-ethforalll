import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const sdk = new ThirdwebSDK('goerli')
const nftDrop = sdk.getNFTDrop("0x70144CCa9fC49F7649965fdEF3D5Cb859641DAd3")

export {nftDrop}
