import { ThirdwebProvider } from '@3rdweb/react';
import 'regenerator-runtime/runtime';
import 'tailwindcss/tailwind.css';

const supportedChainIds = [1, 4, 137];
const connectors = {
    injected: {}
};

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ThirdwebProvider
                connectors={connectors}
                supportedChainIds={supportedChainIds}
            >
                <Component {...pageProps} />
            </ThirdwebProvider>
        </>
    );
};

export default MyApp;
