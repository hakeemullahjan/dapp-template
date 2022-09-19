import { ConnectWallet } from "@thirdweb-dev/react";
import { Typography } from "@mui/material";
import "./styles.scss";

const ConnectWalletPlugin = () => {
  return (
    <div className="connect-wallet-wrapper c-c-sa">
      <Typography color="black" variant="h5" fontWeight="500">
        Connect Wallet Plugin
      </Typography>
      <ConnectWallet />
    </div>
  );
};

export default ConnectWalletPlugin;
