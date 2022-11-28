import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import airdropArtifact from './contracts/airdropAbi';
import tokenArtifact from './contracts/magnaTokenAbi';
import config from '../../common/config';

const web3 = new Web3(new Web3.providers.HttpProvider(config.nextPublicChainNetworkRpc as string));

export const airdropContract = new web3.eth.Contract(
  airdropArtifact as AbiItem[],
  config.nextPublicAirdropAddress,
);

export const tokenContract = new web3.eth.Contract(
  tokenArtifact as AbiItem[],
  config.nextPublicTokenAddress
);
