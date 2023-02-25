import { useAccount, useConnect, useDisconnect } from "wagmi";

import { Button } from "@mui/material";

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <div>
        {isConnected && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => disconnect()}
          >
            Disconnect from {connector?.name}
          </Button>
        )}

        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <Button
              variant="outlined"
              key={x.id}
              onClick={() => connect({ connector: x })}
            >
              {x.name}
              {isLoading && x.id === pendingConnector?.id && " (connecting)"}
            </Button>
          ))}
      </div>

      {error && <div>{error.message}</div>}
    </div>
  );
}
