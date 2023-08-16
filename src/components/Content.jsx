import "./Content.css";
import QRcode from "../assets/image-qr-code.png";

function Content() {
  return (
    <div className="card-layout">
      <img className="detail" src={QRcode} alt="" />
      <h1 className="heading">
        Improve your front-end skills by building projects
      </h1>
      <p className="layout">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Content;
