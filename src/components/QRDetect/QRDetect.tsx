import React, { useRef } from "react";
import jsQR from "jsqr";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BsQrCodeScan } from "react-icons/bs";
const QRscanner = styled.div`
  z-index: 99;
  .img-input {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 32px;
    &:focus,
    &:hover {
      color: #ffffff;
      background-color: var(--speak-now-5);
      text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
      box-shadow: 0 0 5px var(--speak-now-5), 0 0 20px var(--speak-now-5),
        0 0 50px var(--speak-now-5), inset 0 0 10px var(--speak-now-5);
    }
  }
`;
type QRScannerProps = {
  onDetected: (newValue: string) => void;
};

const QRScanner: React.FC<QRScannerProps> = ({ onDetected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageData = reader.result as string;
        const image = new Image();

        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (context) {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);

            const imageData = context.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
            const code = jsQR(
              imageData.data,
              imageData.width,
              imageData.height,
              {
                inversionAttempts: "dontInvert",
              }
            );

            if (code) {
              onDetected(code.data);
              // Handle the detected QR code here
            } else {
              alert(t("check-in.qrNotFound"));
            }
          }
        };

        image.src = imageData;
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <QRscanner>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button
        className="img-input"
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
      >
        <BsQrCodeScan style={{ fontSize: "2rem" }} />
      </button>
    </QRscanner>
  );
};

export default QRScanner;
