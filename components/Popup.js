import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button className="open-button" style={{width: 280, height: 50, fontSize: 20}}> Rent </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Enter your information</h1>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            <button type="submit" className="btn">Login</button>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </form>
        </div>
        <style jsx>{`
          .modal > .close {
            cursor: pointer;
            position: absolute;
            display: block;
            padding: 2px 5px;
            line-height: 20px;
            right: -10px;
            top: -10px;
            font-size: 24px;
            background: #ffffff;
            border-radius: 18px;
            border: 1px solid #cfcece;
          }
        `}</style>

      </div>
    )}
  </Popup>
);
