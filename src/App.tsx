import { Typography } from "@mui/material";
import { useAccount } from "wagmi";

import { Account, Connect, NetworkSwitcher } from "./components";

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dapp boilerplate using Vite (React) + TS, Wagmi, Ethers.js, Redux
        Toolkit & MUIv5.
      </Typography>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
    </>
  );
}
