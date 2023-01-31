import "./styles.css";
import qrcode from "./image-qr-code.png";

export default function App() {
  return (
    <div className="App">
      <div className="panel">
        <img src={qrcode} alt="qr code" className="qr-image" />
        <h1>Improve your front-end skills by building projects</h1>
        <h2>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}
