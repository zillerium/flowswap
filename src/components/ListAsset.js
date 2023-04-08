import { Button } from 'react-bootstrap';
import ListAssetInner from './ListAssetInner';
import { Web3Modal, Web3Button } from '@web3modal/react';
import { goerli, polygonMumbai, avalanche, polygon } from "wagmi/chains";
import { WagmiConfig, useAccount, configureChains, createClient, useNetwork, chain } from "wagmi";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';

function ListAsset() {
    const projectId = '18cf63f918c9aebd18567aabc841a68a';
    const { chains, provider, webSocketProvider } = configureChains(
        [polygonMumbai, goerli, avalanche],
        [w3mProvider({ projectId })],

    )
    const client = createClient({
        autoConnect: true,
        connectors: w3mConnectors({ projectId, version: 1, chains }),
        provider,
    });

    const aEthereumClient = new EthereumClient(client, chains);
    const { isConnected, address } = useAccount()
    const { chain } = useNetwork();
    const network = useNetwork();

    return (
        <WagmiConfig client={client}>
            <div className="row">
                <div className="col-md-4">
                    <Web3Modal projectId="18cf63f918c9aebd18567aabc841a68a"
                        theme="dark"
                        accentColor="default"
                        ethereumClient={aEthereumClient} />
                    <Web3Button></Web3Button>
                </div>

                <div className="col-md-8">
                    {isConnected ? <div>Address: {address}</div> : <div>User not connected</div>}
                    {chain && <div>Network - {chain.name}</div>}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ListAssetInner isConnected={isConnected} address={address} />
                </div>
            </div>

        </WagmiConfig>
    );
}

export default ListAsset;
