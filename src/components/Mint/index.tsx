import { useRef, useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import "./styles.scss";
import { Typography } from "@mui/material";

const Mint = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();

  const uploadFile = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
      fileInputRef.current.onchange = () => {
        if (fileInputRef?.current?.files?.length) {
          const file = fileInputRef.current.files[0];
          setFile(file);
        }
      };
    }
  };

  return (
    <div className="c-c-c">
      <Typography color="black" variant="h5" fontWeight="500">
        Mint NFT Plugin
      </Typography>
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          onClick={() => setFile(undefined)}
          alt="df"
          className="nft-image-preview"
        />
      ) : (
        <div
          onClick={uploadFile}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            setFile(file);
          }}
          className="drag-drop-box r-c-c"
        >
          <Typography
            color="black"
            variant="h5"
            fontWeight="500"
            textAlign="center"
          >
            Drag and drop an image here to upload it!
          </Typography>
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
          file &&
          contract.erc721.mint({
            name: "Hello world!",
            // Image can be a File, or any url that points to a file.
            image: file,
            description: "Your awesome NFT",
          })
        }
      >
        Mint NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
