const config = {
  nextPublicChainNetworkRpc:  process.env.NEXT_PUBLIC_CHAIN_NETWORK_RPC,
  nextPublicAirdropAddress: process.env.NEXT_PUBLIC_AIRDROP_ADDRESS,
  nextPublicTokenAddress: process.env.NEXT_PUBLIC_TOKEN_ADDRESS,
  appDomain: process.env.APP_DOMAIN,
  nextAuthUrl: process.env.NEXTAUTH_URL,
  moralisApiKey: process.env.MORALIS_API_KEY
}

export default config;
