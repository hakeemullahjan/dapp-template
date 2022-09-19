import { FC, useCallback } from "react";
import { Connector } from "@web3-react/types";
import {
  getConnection,
  injectedConnection,
  SupportedWallets,
} from "../../connection";
import { useAppDispatch } from "@hooks/";
import { setSelectedWallet } from "@redux/slices/walletSlice";

type Props = {
  wallets: SupportedWallets[];
};

const WalletButtons: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const tryActivation = useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector).type;

      try {
        //  setPendingConnector(connector)
        //  setWalletView(WALLET_VIEWS.PENDING)
        //  dispatch(updateConnectionError({ connectionType, error: undefined }))

        await connector.activate();

        dispatch(setSelectedWallet(connectionType));
      } catch (error) {
        // console.debug(`web3-react connection error: ${error}`)
        // dispatch(
        //   updateConnectionError({ connectionType, error: error.message }),
        // )
        // sendAnalyticsEvent(EventName.WALLET_CONNECT_TXN_COMPLETED, {
        //   result: WALLET_CONNECTION_RESULT.FAILED,
        //   wallet_type: getConnectionName(connectionType, getIsMetaMask()),
        // })
      }
    },
    [dispatch]
  );

  return (
    <div className="buttons_container">
      {props.wallets.map((walletType) => {
        return (
          <button
            onClick={() => tryActivation(injectedConnection.connector)}
            key={walletType}
          >
            Connect {walletType}
          </button>
        );
      })}
    </div>
  );
};

export default WalletButtons;
