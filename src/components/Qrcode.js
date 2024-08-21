import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="qr-text">Enter Text:</label>
      <input type="text" id="qr-text" value={text} onChange={handleChange} />

      {text && (
        <div>
          <p>Generated QR Code:</p>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
