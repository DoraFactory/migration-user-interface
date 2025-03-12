import { createConfig, configureChains, mainnet, sepolia, Chain } from 'wagmi';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { isTruthy } from './isTruthy';

// Config

export const WAGMI_SUPPORTED_CHAINS: Chain[] = [mainnet, sepolia];

const { chains, publicClient, webSocketPublicClient } = configureChains(
  WAGMI_SUPPORTED_CHAINS,
  [
    // use custom JSON-RPC API endpoints based on chain
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === mainnet.id) {
          return { http: import.meta.env.VITE_MAINNET_RPC_URL };
        }
        if (chain.id === sepolia.id) {
          return { http: import.meta.env.VITE_SEPOLIA_RPC_URL };
        }
        return null;
      },
    }),
    publicProvider(),
  ].filter(isTruthy)
);

const injectedConnectorOptions = {
  chains,
  options: {
    name: 'Injected',
    shimDisconnect: true,
    shimChainChangedDisconnect: false,
  },
};


const connectors = [
  new MetaMaskConnector({
    chains,
    options: {
      shimDisconnect: true,
    },
  }),
  new InjectedConnector(injectedConnectorOptions),
];

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

// Custom connectors

import type { ExternalProvider } from '@ethersproject/providers';

// Create a custom wagmi InjectedConnector using a specific injected EIP-1193 provider (instead of wagmi's default detection logic)
const createInjectedConnectorWithProvider = (provider: ExternalProvider) =>
  new (class extends InjectedConnector {
    getProvider = async () =>
      provider as unknown as Awaited<ReturnType<InjectedConnector['getProvider']>>;
  })(injectedConnectorOptions) as InjectedConnector;


// Custom connector from wallet selection
import {
  type WalletConnection,
  WalletConnectionType,
  type WalletType,
  walletConnectionTypes,
  wallets,
  WALLET_CONNECT_EXPLORER_RECOMMENDED_IDS,
} from '@/constants/wallets';

export const resolveWagmiConnector = ({
  walletType,
  walletConnection,
}: {
  walletType: WalletType;
  walletConnection: WalletConnection;
}) => {
  const walletConfig = wallets[walletType];
  const walletConnectionConfig = walletConnectionTypes[walletConnection.type];

  return walletConnection.type === WalletConnectionType.InjectedEip1193 && walletConnection.provider
    ? createInjectedConnectorWithProvider(walletConnection.provider)
    : connectors.find(({ id }: { id: string }) => id === walletConnectionConfig.wagmiConnectorId);
};
