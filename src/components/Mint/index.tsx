import { Web3Button } from "@thirdweb-dev/react";
import { useRef, useState } from "react";

export default function Mint() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();

  const uploadFile = () => {
    if (fileInputRef?.current) {
      //@ts-ignore
      fileInputRef.current.click();
      //@ts-ignore
      fileInputRef.current.onchange = () => {
        //@ts-ignore
        if (fileInputRef?.current?.files?.length) {
          //@ts-ignore
          const file = fileInputRef.current.files[0];
          setFile(file);
        }
      };
    }
  };

  return (
    <div>
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          onClick={() => setFile(undefined)}
          alt="df"
        />
      ) : (
        <div
          onClick={uploadFile}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            //@ts-ignore
            setFile(e.dataTransfer.files[0]);
          }}
        >
          Drag and drop an image here to upload it!
        </div>
      )}
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        id="profile-picture-input"
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      <Web3Button
        // The contract address
        contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
        // Access the contract itself, perform any action you want on it:
        action={async (contract) =>
          contract.erc721.mint(
            //@ts-ignore
            {
              name: "Hello world!",
              // Image can be a File, or any url that points to a file.
              image: file,
              description: "Your awesome NFT",
            }
          )
        }
      >
        Mint NFT
      </Web3Button>
    </div>
  );
}
