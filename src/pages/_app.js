import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { RecoilRoot } from "recoil";
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'ScrollCom',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const MyApp = ({ Component, pageProps }) => {
  return (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={darkTheme({
      accentColor: '#000000',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </RainbowKitProvider>
  </WagmiConfig>
  )
};

export default MyApp;
