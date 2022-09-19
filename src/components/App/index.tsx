import { FC } from "react";
// import { Ember, Erc20, Kolnet } from "@contracts/types";
import { useWeb3React } from "@web3-react/core";
// import { AvailableContracts } from "../../hooks/useContract/types";
// import { useContract } from "../../hooks/useContract";
// import WalletButtons from "@components/WalletButtons";
import Mint from "@components/Mint";
import ConnectWallet from "@components/ConnectWallet";

import "./styles.scss";

type Props = Record<string, unknown>;

const App: FC<Props> = () => {
  const { provider, account } = useWeb3React();
  // const tusdtContract = useContract<Erc20>(AvailableContracts.TUSDT);
  // const kolnetContract = useContract<Kolnet>(AvailableContracts.KOLNET);
  // const emberContract = useContract<Ember>(AvailableContracts.EMBER);

  console.log("account -", account, provider);

  // const tryTransfer = async () => {
  //   if (tusdtContract) {
  //     tusdtContract.transfer(
  //       "0x09050568Ed00123dA7d9250c8A57AD393EeD8307",
  //       "1000000"
  //     );
  //   }
  // };

  return (
    <div className="app_container r-c-sa">
      {/* <WalletButtons wallets={[SupportedWallets.METAMASK]} /> */}
      {/* <button onClick={tryTransfer}>send</button> */}
      <ConnectWallet />
      <Mint />
    </div>
  );
};

export default App;
