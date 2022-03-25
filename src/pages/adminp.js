import "./admin.css";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import Qrmenu from "./qrmenu";
import { useAuthContext } from "../hooks/useAuthContext";
import QRCode from "qrcode.react";
import { useState } from "react";

function Admin() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [qr, setqr] = useState(false);
  console.log(<QRCode value="http://facebook.github.io/react/" />);

  return (
    <>
      <div
        className="w3-sidebar w3-bar-block w3-light w3-xxlarge"
        style={{ width: "70px" }}
      >
        <Link to="/admin" className="w3-bar-item w3-button">
          <i className="fa fa-home"></i>
        </Link>
        <Link to="/admin/add" className="w3-bar-item w3-button">
          <i className="fa fa-plus"></i>
        </Link>
        <button
          type="button"
          className="w3-bar-item w3-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="fa fa-qrcode "></i>
        </button>

        <Link
          to="#"
          className="w3-bar-item w3-button"
          style={{ bottom: "10px", position: "absolute" }}
        >
          <i onClick={logout} className="fa fa-power-off"></i>
        </Link>
      </div>

      <div style={{ paddingLeft: "70px" }}>
        <div className="w3-container" style={{ border: "30px solid white" }}>
          <Qrmenu />

          <div
            style={{
              justifyContent: "center",
              display: "block",
              textAlign: "center",
            }}
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLabel">
                    <QRCode
                      value={"http://qrmenu-bice.vercel.app/" + user.uid}
                      renderAs="canvas"
                    />
                  </h2>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;