import Moralis from 'moralis';
import type { NextApiRequest, NextApiResponse } from 'next'
import config from '../../../src/common/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { address, chain, network } = req.body;
    await Moralis.start({ apiKey: config.moralisApiKey });
    try {
      const props = {
        address,
        chain,
        network,
        domain: config.appDomain ?? '',
        statement: 'Please sign this message to confirm your identity.',
        uri: config.nextAuthUrl ?? '',
        timeout: 60,
      }
      const message = await Moralis.Auth.requestMessage(props);
      res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}
