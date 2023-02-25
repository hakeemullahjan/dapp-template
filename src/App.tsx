import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

import Profile from "./components/Profile";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const App = () => {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  );
};

export default App;
